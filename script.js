let words = [
  { word: "addition", hint: "The process of adding numbers" },
  { word: "meeting", hint: "Event in which people come together" },
  { word: "number", hint: "Math symbol used for counting" },
  { word: "exchange", hint: "The act of trading" },
  { word: "canvas", hint: "Piece of fabric for oil painting" },
  { word: "garden", hint: "Space for planting flowers and plants" },
  { word: "island", hint: "Land surrounded by water" },
  { word: "keyboard", hint: "Input device for typing on a computer" },
  { word: "library", hint: "Place where books are kept" },
  { word: "elephant", hint: "Large mammal with a trunk" },
  { word: "umbrella", hint: "Protective device from rain or sun" },
  { word: "quizzes", hint: "Short tests or assessments" },
  { word: "octopus", hint: "Marine animal with eight tentacles" },
  { word: "whisper", hint: "Speaking in a soft or hushed voice" },
  { word: "bicycle", hint: "Two-wheeled vehicle powered by pedaling" },
  { word: "tornado", hint: "Violently rotating column of air" },
  { word: "mountain", hint: "Elevated landmass with a peak" },
  { word: "astronomy", hint: "Study of celestial bodies" },
  { word: "keyboard", hint: "Input device for typing on a computer" },
  { word: "longitude", hint: "Measure of distance east or west on Earth" },
  { word: "candle", hint: "Wax with an embedded wick for lighting" },
  { word: "telephone", hint: "Communication device with wires" },
  { word: "lighthouse", hint: "Tower with a light to guide ships" },
  { word: "astronaut", hint: "Person trained for space travel" },
  { word: "penguin", hint: "Flightless bird native to the Southern Hemisphere" },
  { word: "symphony", hint: "Orchestral composition" },
  { word: "galaxy", hint: "Vast system of stars and other matter" },
  { word: "recipe", hint: "Set of instructions for preparing food" },
  { word: "volcano", hint: "Opening in the Earth's crust emitting lava" },
  { word: "whistle", hint: "Device for making a loud, high-pitched sound" },
  { word: "ballet", hint: "Theatrical dance performance" },
  { word: "fountain", hint: "Ornamental water feature" },
  { word: "carousel", hint: "Amusement ride with rotating seats" },
  { word: "puzzle", hint: "A game or problem designed to test ingenuity" },
  { word: "oceanography", hint: "Study of the ocean" },
  { word: "giraffe", hint: "Tall African mammal with a long neck" },
  { word: "jigsaw", hint: "Puzzle with irregularly shaped pieces" },
  { word: "trampoline", hint: "Bouncing apparatus used in gymnastics" },
  { word: "skyscraper", hint: "Very tall building" },
  { word: "kiwi", hint: "Flightless bird native to New Zealand" },
  { word: "guitar", hint: "Musical instrument with strings" },
  { word: "chandelier", hint: "Decorative hanging light fixture" },
  { word: "xylophone", hint: "Musical instrument with wooden bars" },
  { word: "jazz", hint: "Genre of music characterized by improvisation" },
  { word: "syllabus", hint: "Outline and schedule of a course" },
  { word: "lullaby", hint: "Soft and soothing song for babies" },
  { word: "sun", hint: "The bright celestial body in the sky" },
  { word: "food", hint: "Nourishment consumed for sustenance" },
  { word: "sleep", hint: "Resting state of the body and mind" },
  { word: "work", hint: "Engagement in a task or job" },
  { word: "home", hint: "Place where one lives" },
  { word: "friend", hint: "A person with whom one has a bond of mutual affection" },
  { word: "water", hint: "Clear liquid essential for life" },
  { word: "book", hint: "Written or printed work consisting of pages" },
  { word: "phone", hint: "Electronic device for communication" },
  { word: "time", hint: "Measurement of past, present, and future events" },
  { word: "family", hint: "A group of related individuals living together" },
  { word: "love", hint: "Deep affection and care for someone or something" },
  { word: "health", hint: "State of being free from illness or injury" },
  { word: "music", hint: "Art form involving sound and rhythm" },
  { word: "happy", hint: "Feeling or showing pleasure and contentment" },
  { word: "learn", hint: "Acquire knowledge or skills" },
  { word: "eat", hint: "Consume food by chewing and swallowing" },
  { word: "clean", hint: "Free from dirt, marks, or impurities" },
  { word: "smile", hint: "Expression of happiness with the mouth turned up" },
  { word: "sad", hint: "Feeling sorrow or unhappiness" },
  { word: "walk", hint: "Move at a regular pace on foot" },
  { word: "talk", hint: "Speak with someone in conversation" },
  { word: "laugh", hint: "Make sounds expressing amusement" },
  { word: "play", hint: "Engage in activity for enjoyment and recreation" },
  { word: "read", hint: "Look at and comprehend the meaning of written words" },
  { word: "write", hint: "Mark letters or words on a surface with a pen or pencil" },
  { word: "buy", hint: "Acquire in exchange for money" },
  { word: "sell", hint: "Exchange goods or services for money" },
  { word: "watch", hint: "Observe or view with attention" },
  { word: "cook", hint: "Prepare food by combining ingredients" },
  { word: "drink", hint: "Take liquid into the mouth and swallow" },
  { word: "exercise", hint: "Physical activity for health and fitness" },
  { word: "think", hint: "Have a conscious mind and contemplate" },
  { word: "drive", hint: "Operate and control the movement of a vehicle" },
  { word: "travel", hint: "Go on a journey or trip" },
  { word: "meet", hint: "Encounter someone for the first time" },
  { word: "help", hint: "Assist or give support to someone" },
  { word: "remember", hint: "Recall information from the past" },
  { word: "forget", hint: "Fail to remember something" },
  { word: "fix", hint: "Repair or mend something" },
  { word: "create", hint: "Bring something into existence" },
  { word: "clean", hint: "Make something free from dirt or impurities" },
  { word: "wear", hint: "Have on one's body as clothing" },
  { word: "see", hint: "Perceive with the eyes" },
  { word: "hear", hint: "Perceive with the ears" },
  { word: "talk", hint: "Speak or converse with others" },
  { word: "enjoy", hint: "Experience pleasure or satisfaction" },
  { word: "exercise", hint: "Physical activity for health and fitness" },
  { word: "fix", hint: "Repair or mend something" },
  { word: "office", hint: "Place of work or business" },
  { word: "meeting", hint: "Gathering of people for discussion or collaboration" },
  { word: "team", hint: "Group of individuals working together toward a common goal" },
  { word: "project", hint: "Planned undertaking with specific objectives" },
  { word: "classroom", hint: "Room used for teaching and learning" },
  { word: "teacher", hint: "Person who instructs and educates students" },
  { word: "student", hint: "Learner enrolled in an educational institution" },
  { word: "school", hint: "Institution for education and learning" },
  { word: "college", hint: "Higher education institution offering degree programs" },
  { word: "university", hint: "Institution of higher learning with various faculties" },
  { word: "workshop", hint: "Session for practical instruction or hands-on training" },
  { word: "training", hint: "Process of acquiring specific skills or knowledge" },
  { word: "employee", hint: "Person working for an organization or employer" },
  { word: "boss", hint: "Supervisor or manager in charge of a team or department" },
  { word: "projector", hint: "Device for displaying visual information to an audience" },
  { word: "presentation", hint: "Delivery of information to an audience" },
  { word: "assignment", hint: "Task or work given to someone as part of a job or course" },
  { word: "deadline", hint: "Time limit for completing a task or project" },
  { word: "report", hint: "Document presenting information or findings" },
  { word: "computer", hint: "Electronic device for processing and storing data" },
  { word: "internet", hint: "Global network connecting computers and information" },
  { word: "email", hint: "Electronic mail for sending and receiving messages" },
  { word: "office", hint: "Place where administrative work is conducted" },
  { word: "desk", hint: "Furniture for working or studying, typically with a flat top" },
  { word: "chair", hint: "Furniture for sitting, often with a back and four legs" },
  { word: "document", hint: "Written or printed piece of information" },
  { word: "colleague", hint: "Person working with others in the same organization" },
  { word: "workplace", hint: "Location where work is carried out" },
  { word: "library", hint: "Place for books and other informational resources" },
  { word: "classmate", hint: "Student in the same class or course" },
  { word: "lesson", hint: "Unit of instruction or learning" },
  { word: "lecture", hint: "Formal spoken presentation on a specific topic" },
  { word: "exam", hint: "Formal assessment of knowledge or skills" },
  { word: "study", hint: "Process of learning or reviewing information" },
  { word: "research", hint: "Systematic investigation to discover facts or principles" },
  { word: "conference", hint: "Formal meeting for discussion or exchange of information" },
  { word: "agenda", hint: "List or plan of items to be discussed or accomplished" },
  { word: "announcement", hint: "Public statement or declaration of news or information" },
  { word: "communication", hint: "Exchange of information or ideas" },
  { word: "manager", hint: "Person responsible for overseeing and directing a team" },
  { word: "supervisor", hint: "Person in charge of overseeing work and providing guidance" },
  { word: "task", hint: "A piece of work to be done or undertaken" },
  { word: "office supplies", hint: "Items used in an office for daily tasks" },
  { word: "stationery", hint: "Writing materials, pens, paper, etc." },
  { word: "office hours", hint: "Designated hours when an office or service is open" },
  { word: "schedule", hint: "Plan or timetable for events or activities" },
  { word: "lunch break", hint: "Designated time for eating a meal during work or school hours" },
  { word: "vacation", hint: "Period of time when one is away from work or school" },
  { word: "colleague", hint: "Person working with others in the same organization" },
  { word: "teamwork", hint: "Collaborative effort of a group to achieve a common goal" },
  { word: "policy", hint: "Set of rules or principles governing actions in an organization" },
  { word: "procedure", hint: "Series of steps taken to accomplish a task or goal" },
  { word: "facility", hint: "Physical or structural means for conducting activities" },
  { word: "equipment", hint: "Tools or machinery used for a specific purpose" },
  { word: "budget", hint: "Financial plan for a specific period" },
   { word: "feedback", hint: "Information or comments provided for improvement" },
  { word: "announcement", hint: "Public statement or declaration of news or information" },
  { word: "collaboration", hint: "Joint effort of individuals or groups towards a common goal" },
  { word: "policy", hint: "Set of rules or principles governing actions in an organization" },
  { word: "procedure", hint: "Series of steps taken to accomplish a task or goal" },
  { word: "equipment", hint: "Tools or machinery used for a specific purpose" },
  { word: "budget", hint: "Financial plan for a specific period" },
  { word: "event", hint: "Planned or organized occurrence" },
  { word: "facility", hint: "Physical or structural means for conducting activities" },
  { word: "leadership", hint: "The ability to guide or direct a group towards a goal" },
  { word: "decision", hint: "Conclusion or resolution reached after consideration" },
  { word: "network", hint: "System of interconnected people or things" },
  { word: "announcement", hint: "Public statement or declaration of news or information" },
  { word: "collaboration", hint: "Joint effort of individuals or groups towards a common goal" },
  { word: "policy", hint: "Set of rules or principles governing actions in an organization" },
  { word: "procedure", hint: "Series of steps taken to accomplish a task or goal" },
  { word: "equipment", hint: "Tools or machinery used for a specific purpose" },
  { word: "budget", hint: "Financial plan for a specific period" },
  { word: "event", hint: "Planned or organized occurrence" },
  { word: "facility", hint: "Physical or structural means for conducting activities" },
  { word: "leadership", hint: "The ability to guide or direct a group towards a goal" },
  { word: "decision", hint: "Conclusion or resolution reached after consideration" },
  { word: "network", hint: "System of interconnected people or things" },
];
const wordText= document.querySelector(".word"),
      hintText=document.querySelector(".hint span "),
      timeText=document.querySelector(".time b"),
      inputfield=document.querySelector("input"),
      refreshBtn=document.querySelector(".refresh-word"),
      checkBtn=document.querySelector("check-word");


      let correctWord,timer;
      

       const checkWord=()=>{
        let userWord= inputfield.value.toLowerCase();
        if(!userWord)
        return alert("Please enter the word to check");
      if(userWord!==correctWord)
      return alert(`oops ! ${userWord} is not a correct Word`);
    else{
      return alert(`congrats ! ${correctWord.toUpperCase()} is the correct word `);
    }
       
       }
       const initTimer=(maxTime)=>{
        clearInterval(timer);
        timer=setInterval(()=>{
          if(maxTime>0){
            maxTime--;
            return(timeText.innerText=maxTime);
          }
          alert(`Time Off! ${correctWord.toUpperCase()} was the correct word`)
          initGame();
        },1000)
       }
       const initGame=()=>{
        initTimer(15);
        let randomObj= words[Math.floor(Math.random() * words.length)];
        let wordArray=randomObj.word.split("");
        for(let i =wordArray.length-1;i>0;i--){
          let j =Math.floor(Math.random()*(i+1));
          [wordArray[i],wordArray[j]]=[wordArray[j],wordArray[i]];

        }
        wordText.innerHTML=wordArray.join("");
        hintText.innerHTML=randomObj.hint;
        correctWord=randomObj.word.toLowerCase();
        inputfield.value="";
        inputfield.setAttribute("maxLength",correctWord.length);
       }
       initGame();

       refreshBtn.addEventListener("click", initGame);
       checkBtn.addEventListener("click", checkWord);