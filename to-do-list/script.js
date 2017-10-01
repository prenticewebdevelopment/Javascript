/* 
 * Created by: Harry Prentice
 * Date: 22/09/17
 */

//CACHE THE DOM
var elButton = document.getElementById("btn");                                  //get button
var elUl = document.getElementById("list");                                     //get list
var elWarning = document.getElementById("warning");                             //get warning message
var elMessage = document.getElementById("messageComplete");                     //get complete instructions

//EVENT LISTENER
elButton.addEventListener("click", function () {                                //button's click event listener

    //LIST OBJECT
    var List = {                                                                //create list object
        
        elLi: document.getElementById("text").value,                            //get value of input box (This is the task entered by user)
        
        addListItem: function () {                                              //method to return value
            return this.elLi;                                                   //return value
        },
        warnUser: function(){                                                   //method to warn user
            return "Please Enter a Task.";                                      //Tell user to add a task
        },
        messageComplete: function(){                                            //method to message user
            return "Click a task to complete it.";                              //return instructions to delete/complete a task
        }
        
    };//ENDOBJECT

    //FORM VALIDATION
    if (!List.elLi) {                                                           //if input is empty
        elWarning.innerHTML = List.warnUser();                                  //call  warnUser() method from List object
        $("#warning").show();                                                   //show warning
        $("#warning").fadeOut(1000);                                            //fade out warning (1 second or 1000 milliseconds)
    } else {                                                                    //else = the user entered a task

        //ADD LIST ITEM
        elUl.innerHTML += "<li class=" + "'listItem'>" + List.addListItem();    //create a list item equal to user's input by calling addListItem method
        +"</li>";                                                                       //from list object
        
        //INSTRUCT USER
        elMessage.innerHTML = List.messageComplete();                           //call messageComplete() method fom list object; add to DOM

        //DELETE/COMPLETE A TASK
        $("li").click(function () {                                             //cache list item
            $(this).css("background-color", " #66ff99")                         //change background color
                    .fadeOut("slow");                                           //fade out (slow)
        });
    }//ENDIF
    
});//ENDEVENTLISTENER