import { showNotification } from "@mantine/notifications";
import cn from "classnames";
import { useEffect, useState } from "react";
import { ReactComponent as Hand } from "./hand.svg";

import "./likeButton.scss";

const particleList = Array.from(Array(10));

const LikeButton = () => {

  let url = window.location.href || document.URL
  const [liked, setLiked] = useState( localStorage.getItem(url.split("/blog/").at(-1)) === 'true' ? true : null);
  const [clicked, setClicked] = useState(false);
  const [spam, setSpam] = useState(false);


  useEffect(() => {
    if (liked === true) {
      localStorage.setItem(url.split("/blog/").at(-1), "true");
    } else {
      localStorage.setItem(url.split("/blog/").at(-1), "null");
    }
  }, [liked])

  return (
    <div className="button-container">
      <button
        onClick={() => {
          fetch("https://myblog.hammamikhairi.repl.co/like/" + url.split("/blog/").at(-1)).then(res => res.json()).then(data => {setSpam(data.spam)});
          if (!liked && spam) {
            showNotification({
              id: 'hello-there',
              disallowClose: true,
              autoClose: 5000,
              title: "You've been compromised",
              message: 'Leave the building immediately ( or stop spamming the like button )',
              color: 'red',
              className: 'my-notification-class',
              loading: false,
            });
          }

          if (liked) {
            fetch("https://myblog.hammamikhairi.repl.co/likedecent/unlike/" + url.split("/blog/").at(-1));
          } else {
            fetch("https://myblog.hammamikhairi.repl.co/likedecent/like/" + url.split("/blog/").at(-1));
          }

          setLiked(!liked);
          setClicked(true);
        }}
        onAnimationEnd={() => setClicked(false)}
        className={cn("like-button-wrapper", {
          liked,
          clicked,
        })}
      >
        {liked && (
          <div className="particles">
            {particleList.map((_, index) => (
              <div
                key={index}
                className="particle-rotate"
                style={{
                  transform: `rotate(${
                    (360 / particleList.length) * index + 1
                  }deg)`,
                }}
              >
                <div className="particle-tick" />
              </div>
            ))}
          </div>
        )}
        <div className="like-button">
          <Hand />
          <span>Like</span>
          <span  className={cn("suffix", { liked })}>d</span>
        </div>
      </button>
    </div>
  );
};

export default LikeButton;
