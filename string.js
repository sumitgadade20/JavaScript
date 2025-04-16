// console.log("Pallindrom Array");

// let str="madam";
// let left=0;
// let right=str.length-1;
// let isStr1=true;
// while(left<right)
// {
//     if(str[left]!==str[right])
//     {
//             isStr1=false;
//     }
//     left++;
//     right--;
// }
// console.log(isStr1);

// console.log("Vowel Consonent");

// function CountVowels(str){
// str=str.toLowerCase();
// let vowel=0;
// let consonent=0;
// for(let char of str)
// {
//     if(/[aeiou]/.test(char)){
//         vowel++;
//     }
//     else if(/[a-z]/.test(char))
//     {
//         consonent++;
//     }
// }
//  return{vowel, consonent};
// }
// console.log(CountVowels("Hello Word"));


// console.log("First Non Repeating Character");

// let char="swiss";

//    for(let i=0;i<char.length;i++)
//     {let count=0;
//         for(let j=0;j<char.length;j++)
//         {
//             if(char[i]===char[j])
//             {
//                     count++;
//             }
//         }
//         if(count==1)
//         {
//             console.log(char[i]);
//             break;
//         }
//     }   

//     function firstNonRepeatingCharacter(str) {
//         for (let i = 0; i < str.length; i++) {
//             if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//                 return str[i];
//             }
//         }
//         return "No non-repeating character found";
//     }
    
//     console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"

    

    // console.log("Anagram Array");

    // let str1="Silent";
    // let str2="Listen";
    // str1=str1.toLowerCase();
    // str2=str2.toLowerCase();
    // str1 = str1.split("").sort().join("");
    // str2 = str2.split("").sort().join("");
    //  if(str1===str2)
    //  {
    //     console.log("Is Anagram");
    //  }
    //  else{
    //     console.log("Is Not Anagram");
    //  }


    // function FrequencyChar(str)
    // {
    //     let fre={};
    //     for(let char of str)
    //     {
    //         fre[char]=(fre[char]||0)+1;
    //     }
    //     return fre;
    // }
    // console.log(FrequencyChar("hello"));


    // console.log("Remove Duplicate");

    // function DuplicateRemoveString(str)
    // {
    //     let result="";
    //     for(let char of str)
    //     {
    //         if(!result.includes(char))
    //         {
    //                 result+=char;
    //         }
    //     }
    //     return result;
    // }
    // console.log(DuplicateRemoveString("Programming"));

//    console.log("Find Largest Word In String");
    // function findLargestWord(str)
    // {
    //     let word=str.split(" ");
    //     let words="";

    //     for(let char of word)
    //     {
    //         if(char.length>words.length)
    //         {
    //             words=char;
    //         }
    //     }
    //     return words;
    // }
    // console.log(findLargestWord("java is prograaming language"));


    // console.log("Contains only digit");
    // function containsOnlyDigits(str) {
    //     return /^[0-9]+$/.test(str);
    // }
    
    // console.log(containsOnlyDigits("12345")); // Output: true
    // // console.log(containsOnlyDigits("123a5")); // Output: false

    console.log("Reverse Sentence");

    function reverseSentence(str)
    {
            return str.split(" ").reverse().join(" ");
    }
    console.log(reverseSentence("Hello Word"));
    