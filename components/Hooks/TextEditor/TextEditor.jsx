import './texteditor.sass'

export function cellEditor (line, key) {
  if(line[0] === "#")
    return <p className="comment" key={key}><i>{line}</i></p>
  else if(line.includes("import")){
    if(line.indexOf("import") === 0){
      if(line.includes("as")){
        return (
          <p className="libraries"
            key={key}
          >
            <span><b className="import">import</b></span>
            {
              line.split("import")[1].split("as")[0]
            }
            <span><b className="import">as</b></span>
            {
              line.split("import")[1].split("as")[1]
            }
          </p>
        )
      }
      else{
        return (
          <p className="libraries"
            key={key}
          >
            <span><b className="import">import</b></span>
            {
              line.split("import")[1].split("from")[0]
            }
            <span><b className="import">from</b></span>
            {
              line.split("import")[1].split("from")[1]
            }
          </p>
        )
      }
    }
    else{
      return (
        <p className="libraries"
          key={key}
        >
          <span><b className="import">from</b></span>
          {
            line.split("import")[0].split("from")[1]
          }
          <span><b className="import">import</b></span>
          {
            line.split("import")[1].split("from")[0]
          }
        </p>
      )
    }
  }
  else{
    // return <p className='code' key={key}>{line}</p>
    if (line.includes("(")){
      let words = line.split(" ")
      let table = []
      line.split("(").forEach((f) => {
        const test = f.split(" ").at(-1)
        if (test !== '')
          table.indexOf(test) === -1 ? table.push(test) : console.log()
      })

      // console.table(words.forEach(value => !table.some(element => value.includes(element))))

      let html = []
      words.pop()
      words.forEach(word => {
        if (!table.some(element => word.includes(element))){
          html.push(<span key={word}>{word + " "}</span>)
        }
        else{
          if (word.includes("(")){
            const func = word.split("(")
            html.push(<span key={word}><b className='function'>{func[0] + "(" }</b><span className="variable">{ func[1].split(")")[0] }</span><b className='function'>{ ") "}</b></span>)
          }
        }
      })
      return <p key={key} >{html}</p>
    }
    else{
      return <p key={key} className="code">{line}</p>
    }
  }
}

export function lessonFormatter (line, key) {
  return cellEditor(line, key)
}
