
const checkvowels=()=>{
    let vowelsCount=0;
    document.querySelector("#inputtext")
    for(let i=0;i<$("#inputtext").val().toLowerCase().length;i++)
    {
    const char=$("#inputtext").val().toLowerCase().charAt(i);
    if(isVowel(char))
    {vowelsCount++;}
}
return $("#result").text("Total Vowels= "+vowelsCount);
}
const isVowel=char=>
{
    const vowels=["a","e","i","o","u"];
    return vowels.includes(char);
}
