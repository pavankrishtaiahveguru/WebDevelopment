// nested functions
function grandFatherFunction(){
    console.log("GrandFatherFunction");
    function fatherFunction(){
        console.log("FatherFunction");
        function childFunction(){
            console.log("ChildFunction");
            function grandChildFunction(){
                console.log("GrandChildFunction");
            }
            grandChildFunction();
        }
        childFunction();
    }
    fatherFunction();
}
grandFatherFunction();

//  recommended approach to perform nested functions
function grandFatherFunction(){
    console.log("GrandFatherFunction");
    function fatherFunction(){
        console.log("FatherFunction");
        function childFunction(){
            console.log("ChildFunction");
            function grandChildFunction(){
                console.log("GrandChildFunction");
            }
            return grandChildFunction;
        }
        return childFunction;
    }
    return fatherFunction;
}
grandFatherFunction()()()();