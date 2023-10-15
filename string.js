let str  = "amit";
let str1 = "kumar";

// console.log(`my name is ${str}  ${str1}`);

let text =  "This is a sample text in JavaScript."

// ********************************* methods **************************************

                               // String length

                               console.log("the length of message is :",text.length); //36

                              // String slice()

                              console.log("slice1 :=",text.slice(10,16)); // sample
                              console.log("slice2 :=",text.slice(4));    // is a sample text in JavaScript.
                              console.log("slice3 :=",text.slice(-10, -1));    // avaScript

                                // String substring()

                                console.log("substring",text.substring(10,16)); // sample

                                // String replace()

                                console.log("replace this with it :",text.replace("This","it")); //it is a sample text in JavaScript.
                                console.log("using regular exprssion /i :=",text.replace( /JavaScript/i,"js"));//This is a sample text in js
                               console.log("using regular exprssion /g :=",text.replace( /JavaScript/g,"js"));

                                // String replaceAll()

                                let myText = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

                                console.log("replace all dog with hen :=",myText.replaceAll("dog","hen")); //The quick brown fox jumps over the lazy hen. If the hen reacted, was it really lazy?

                                // String toUpperCase()

                                console.log("all in uppercase",myText.toUpperCase());//THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. IF THE DOG REACTED, WAS IT REALLY LAZY?

                                // String toLowerCase()

                                let p = "THIS IS A DOG."
                                console.log("all in lower case :=>",p.toLowerCase()); //this is a dog.

                                // String concat()

                                let fName = "amit";
                                let lName = "kumar";

                                let fullName = fName.concat(" ", lName);

                                console.log("concat :=>",fullName); //amit kumar


                                // String trim()

                                let name  = "       amit kumar      ";
                                console.log("trim both side :=>",name.trim()); //amit kumar
                                
                                // String trimStart()
                                
                                console.log("trim from start :=>",name.trimStart()); // amit kumar      
                                
                                // String trimEnd()
                                
                                console.log("trim from end :=>",name.trimEnd()); //        amit kumar


                                // String padStart()

                                let num = "5";
                                console.log("pad:=>",num.padStart(4,0)); //0005
                                
                                
                                // String padEnd()
                                console.log("pad:=>",num.padEnd(5,0)); // 50000

                                // String charAt()

                                let player = "sachin"
                                console.log("charAt:=>",player.charAt(2)); // c

                                // String charCodeAt()

                                console.log("charCodeAt:=",player.charCodeAt(5)); //110

                                // String split()

                                let team = "India,Aus,pak"
                                const s = team.split("Aus");
                                console.log(s); //[ 'India,', ',pak' ]

                                // String indexOf()

                                console.log(team.indexOf("Aus")); // 6
                                
                                
                                
                                // String lastIndexOf()

                                let t = "hello world"
                                console.log("last index ",t.lastIndexOf("d")); // 10

                                // String search()
                          
                                let msg = "hello GooD mOrNinG"
                                let re = /[A-Z]/;
                                let see = msg.search(re);
                                let sear = console.log("seaching........", see);

                                // String match()

                                let mat = "returns the result of matching a string against a regular expression.";
                                const reg = /matching/;
                                let result = mat.match(reg)
                                console.log("-----------",result);


                                let mat1= "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz-1234567890";
                                const reg1  = /[C-K]/gi
                                let result1 = mat1.match(reg1)
                                console.log("match global",result1);


                                // String matchAll()

                                let strMatchAll = "Learn to program with our beginner-friendly tutorials and examples. Read tutorials, try examples, write code and learn to program."
                               
                                let strRes  = strMatchAll.matchAll("and");
                                console.log("matchAll -----------", Array.from(strRes));

                                let strMatchAll1 = "Learn to program with our beginner-friendly tutorials and examples. Read tutorials, try examples, write code and learn to program."
                               let strReg = /["and"]/gi
                                let strRes1  = strMatchAll1.matchAll(strReg);
                                console.log("matchAll1 -----------", Array.from(strRes1));


                                // String includes()

                                let strInclude = "Learn to program with our beginner-friendly tutorials and examples. Read tutorials, try examples, write code and learn to program."

                                console.log("include ",  strInclude.includes('TRY'));

                                // String startsWith()

                                let strStartsWith = "Learn to program with our beginner-friendly tutorials and examples. Read tutorials, try examples, write code and learn to program."

                                console.log("start with ",strStartsWith.startsWith("learn"));


                                // String endsWith()

                                let strEndsWith = "Learn to program with our beginner-friendly tutorials and examples. Read tutorials, try examples, write code and learn to program."

                                console.log("end with ",strEndsWith.endsWith("program."));
