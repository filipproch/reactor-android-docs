/* todo: create api with CORS enabled
fetch("http://jcenter.bintray.com/cz/filipproch/lib/reactor-android/maven-metadata.xml")
  .then((response) => response.text())
  .then((str) => {
    console.log('fetched - ', str)
    return (new window.DOMParser()).parseFromString(str, "text/xml")
  })
  .then((parsedXml) => {
    Array.prototype.slice.call(document.getElementsByClassName("reactor-current-version"))
      .forEach((element) => {
        console.log(parsedXml)
        element.innerHTML = `${parsedXml.metadata.version}`
      })
  })*/
