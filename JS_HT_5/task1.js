let link = document.getElementsByTagName('a');
for (const linkElement of link) {
    linkElement.style.textDecoration = 'none';
    if (/^http/.test(linkElement.text))
    {
        console.log(linkElement.text);
        linkElement.style.textDecorationStyle = 'dotted';
        linkElement.style.textDecorationLine = 'underline';
    }
}