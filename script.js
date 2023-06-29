let $ = document
function getClass (className){
    return $.querySelector('.' + className)
}
function getClasses (classesName){
    return $.getElementsByClassName(classesName)
}
function getId (IdName){
    return $.getElementById(IdName)
}
function crElm (elementName){
    return $.createElement(elementName)
}
// let usersBox = document.querySelector('.users')
let userBox , userProf , profilePicture , userInfo , userName , lastMessage
// let chatSection = document.querySelector('.chatsec')
let chatHeader , informations , userprofile , username , userHeaderName , lastOnline , chatBody , chats , datemessage , mymessage,myText , myTextInfo , mytime , Status , yourmessage , yourText , yourTime , typeBox , typeInput , sendButton , faFaPaperPlane , eventTarget , userProfPic 
let chatFooter , dateValue , myTextValue , myTimeValue , statusValue , yourTextValue , yourTimeValue , eventTarget2 , eventTarget3
let newMessage , contextMenu , pageBody , front ,chatContainer , selectBox , selectBoxValue , usersBox , chatSection , foundUser ,newMessageObj
let userChats = [
    {
      "id": 1,
      "name": "سحر",
      "strId": "reza123",
      "bio": "سلام، من رضا هستم. عاشق برنامه نویسی و تکنولوژی هستم.",
      "lastOnline": "2023-06-25T09:30:00Z",
      "profilePicUrl": "img/2.jpg",
      'messages':   [
        { "messId": 1, "textValue": "Hi there!", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:21:36.287Z" },
        { "messId": 2, "textValue": "Hello! How are you?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:22:00.000Z" },
        { "messId": 3, "textValue": "I'm good, thanks for asking.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:23:30.000Z" },
        { "messId": 4, "textValue": "That's great to hear!", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:25:15.000Z" },
        { "messId": 5, "textValue": "What have you been up to lately?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:26:20.000Z" },
        { "messId": 6, "textValue": "Not much, just working and hanging out with friends. What about you?", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:28:00.000Z" },
        { "messId": 7, "textValue": "Same here, just trying to stay busy.", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:30:10.000Z" },
        { "messId": 8, "textValue": "Yeah, it's tough sometimes.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:31:25.000Z" },
        { "messId": 9, "textValue": "Definitely. Anyway, it was good chatting with you!", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:33:40.000Z" },
        { "messId": 10, "textValue": "You too! Take care.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:35:00.000Z" }
      ],
    },
    {
      "id": 2,
      "name": "علی",
      "strId": "ali456",
      "bio": "سلام، من علی هستم. به دنبال شغلی در حوزه IT هستم.",
      "lastOnline": "2023-06-26T12:45:00Z",
      "profilePicUrl": "img/3.jpg",
      'messages':[
        {"messId": 1,"textValue": "Hey, how are you?","sender": 0,"delStatus": "sent","sendtime": "2023-06-27T14:30:00.000Z"},
        {"messId": 2,"textValue": "I'm good, thanks. How about you?","sender": 1,"delStatus": "delivered","sendtime": "2023-06-27T14:32:00.000Z"},
        {"messId": 3,"textValue": "I'm doing well too. What have you been up to?","sender": 0,"delStatus": "seen","sendtime": "2023-06-27T14:35:00.000Z"},
        {"messId": 4,"textValue": "Not much, just working and hanging out with friends. You?","sender": 1,"delStatus": "unsent","sendtime": "2023-06-27T14:37:00.000Z"},
        {"messId": 5,"textValue": "Same here, just trying to stay busy. Have any plans for the weekend?","sender": 0,"delStatus": "sent","sendtime": "2023-06-27T14:40:00.000Z"},
        {"messId": 6,"textValue": "Not yet, but I was thinking of maybe going to the beach. How about you?","sender": 1,"delStatus": "unsent","sendtime": "2023-06-27T14:42:00.000Z"},
        {"messId": 7,"textValue": "That sounds fun! I might just relax at home, but we should definitely catch up again soon.","sender": 0,"delStatus": "seen","sendtime": "2023-06-27T14:45:00.000Z"},
        {"messId": 8,"textValue": "Definitely, let's plan something soon. Talk to you later!","sender": 1,"delStatus": "sent","sendtime": "2023-06-27T14:47:00.000Z"},
        {"messId": 9,"textValue": "Sounds good! See you later!","sender": 0,"delStatus": "unsend","sendtime": "2023-06-27T14:50:00.000Z"},
        {"messId": 10,"textValue": "Oops.. I didn't mean that, my finger slipped!","sender": 1,"delStatus": "unsent","sendtime": "2023-06-27T14:52:00.000Z"}
      ],
    },
    {
      "id": 3,
      "name": "نگار",
      "strId": "negar789",
      "bio": "سلام، من نگار هستم. به دنبال یک پایان نامه در حوزه روانشناسی هستم.",
      "lastOnline": "2023-06-25T20:15:00Z",
      "profilePicUrl": "img/4.jpg",
      'messages':[
        { messId: 1, textValue: "Hey there!", sender: 0, delStatus: "sent", sendtime: "2023-06-27T14:33:41.514Z" },
        { messId: 2, textValue: "Hi! How are you?", sender: 1, delStatus: "delivered", sendtime: "2023-06-27T14:34:41.514Z" },
        { messId: 3, textValue: "I'm good, thanks for asking.", sender: 0, delStatus: "seen", sendtime: "2023-06-27T14:35:41.514Z" },
        { messId: 4, textValue: "That's great to hear!", sender: 1, delStatus: "sent", sendtime: "2023-06-27T14:36:41.514Z" },
        { messId: 5, textValue: "Yeah, it is. How about you?", sender: 0, delStatus: "delivered", sendtime: "2023-06-27T14:37:41.514Z" },
        { messId: 6, textValue: "I'm doing well too, thanks.", sender: 1, delStatus: "seen", sendtime: "2023-06-27T14:38:41.514Z" },
        { messId: 7, textValue: "So, what have you been up to lately?", sender: 0, delStatus: "sent", sendtime: "2023-06-27T14:39:41.514Z" },
        { messId: 8, textValue: "Not much, just working and hanging out with friends. How about you?", sender: 1, delStatus: "delivered", sendtime: "2023-06-27T14:40:41.514Z" },
        { messId: 9, textValue: "Same here, just trying to stay busy.", sender: 0, delStatus: "seen", sendtime: "2023-06-27T14:41:41.514Z" },
        { messId: 10, textValue: "Yeah, it can be tough sometimes.", sender: 1, delStatus: "sent", sendtime: "2023-06-27T14:42:41.514Z" }
      ],
    },
    {
      "id": 4,
      "name": "محمد",
      "strId": "mohammad012",
      "bio": "سلام، من محمد هستم. عاشق سفر و کتاب خوانی هستم.",
      "lastOnline": "2023-06-26T08:00:00Z",
      "profilePicUrl": "img/5.jpg",
      'messages': [
        {"messId":1,"textValue":"Hey, how's it going?","sender":0,"delStatus":"sent","sendtime":"2023-06-27T14:40:00.000Z"},
        {"messId":2,"textValue":"Not too bad, thanks for asking. What about you?","sender":1,"delStatus":"unsent","sendtime":"2023-06-27T14:41:20.000Z"},
        {"messId":3,"textValue":"I'm doing pretty well.","sender":0,"delStatus":"delivered","sendtime":"2023-06-27T14:42:45.000Z"},
        {"messId":4,"textValue":"That's good to hear. So what have you been up to lately?","sender":1,"delStatus":"unsent","sendtime":"2023-06-27T14:44:15.000Z"},
        {"messId":5,"textValue":"Not too much, just working and hanging out with friends. How about you?","sender":0,"delStatus":"sent","sendtime":"2023-06-27T14:45:30.000Z"},
        {"messId":6,"textValue":"Same here, just trying to stay busy.","sender":1,"delStatus":"unsent","sendtime":"2023-06-27T14:47:00.000Z"},
        {"messId":7,"textValue":"Yeah, it can be tough sometimes. Have you made any plans for the weekend?","sender":0,"delStatus":"sent","sendtime":"2023-06-27T14:48:20.000Z"},
        {"messId":8,"textValue":"Not yet, I'm still trying to figure out what to do. Do you have any suggestions?","sender":1,"delStatus":"unsent","sendtime":"2023-06-27T14:50:00.000Z"},
        {"messId":9,"textValue":"Well, there's a new movie that just came out that looks pretty good. Or we could go hiking if you're up for it.","sender":0,"delStatus":"delivered","sendtime":"2023-06-27T14:51:30.000Z"},
        {"messId":10,"textValue":"Those both sound like fun options. Let me think about it and get back to you.","sender":1,"delStatus":"unsent","sendtime":"2023-06-27T14:53:00.000Z"}
      ]
    },
    {
      "id": 5,
      "name": "فاطمه",
      "strId": "fatemeh345",
      "bio": "سلام، من فاطمه هستم. به دنبال شروع کار در حوزه آموزش هستم.",
      "lastOnline": "2023-06-25T22:30:00Z",
      "profilePicUrl": "img/6.jpg",
      'messages':[
      {"messId": 1, "textValue": "Hey there!", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:45:00.000Z"},
      {"messId": 2, "textValue": "Hi! How are you?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:46:00.000Z"},
      {"messId": 3, "textValue": "I'm doing well. Thanks for asking.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:47:00.000Z"},
      {"messId": 4, "textValue": "That's good to hear.", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:48:00.000Z"},
      {"messId": 5, "textValue": "What have you been up to lately?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:49:00.000Z"},
      {"messId": 6, "textValue": "Not much, just been busy with work.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:50:00.000Z"},
      {"messId": 7, "textValue": "Ah, I see. What kind of work do you do?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:51:00.000Z"},
      {"messId": 8, "textValue": "I work in software development.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:52:00.000Z"},
      {"messId": 9, "textValue": "That's cool! I'm a designer myself.", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:53:00.000Z"},
      {"messId": 10, "textValue": "Nice! We should collaborate on a project sometime.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:54:00.000Z"}
      ]
    },
    {
      "id": 6,
      "name": "امیر",
      "strId": "maryam678",
      "bio": "سلام، من مریم هستم. عاشق موسیقی و تئاتر هستم.",
      "lastOnline": "2023-06-26T16:20:00Z",
      "profilePicUrl": "img/7.jpg",
      'messages':[
      {"messId": 1, "textValue": "Hey there! How are you?", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:55:00.000Z"},
      {"messId": 2, "textValue": "I'm doing well, thanks for asking. How about you?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:56:00.000Z"},
      {"messId": 3, "textValue": "I'm good too, just a bit busy with work.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:57:00.000Z"},
      {"messId": 4, "textValue": "Yeah, same here. Have you made any progress on that project we were discussing?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:58:00.000Z"},
      {"messId": 5, "textValue": "Yes, I've been working on it whenever I have some free time. It's coming along nicely.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:59:00.000Z"},
      {"messId": 6, "textValue": "That's great to hear. Let me know if you need any help with it.", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:00:00.000Z"},
      {"messId": 7, "textValue": "Thanks, I appreciate it. I might take you up on that offer.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:01:00.000Z"},
      {"messId": 8, "textValue": "No problem. So, how's your family doing?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:02:00.000Z"},
      {"messId": 9, "textValue": "They're all doing well, thanks for asking. How about yours?", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:03:00.000Z"},
      {"messId": 10, "textValue": "Everyone's good on my end as well. Thanks for asking.", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:04:00.000Z"}
      ]
    },
    {
      "id": 7,
      "name": "ناشناس",
      "strId": "asal901",
      "bio": "سلام، من عسل هستم. به دنبال پیدا کردن مسیر زندگی هستم.",
      "lastOnline": "2023-06-26T14:10:00Z",
      "profilePicUrl": "img/8.png",
      'messages':[
      {"messId": 1, "textValue": "Hey, are you free this weekend?", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:05:00.000Z"},
      {"messId": 2, "textValue": "I think so, why?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:06:00.000Z"},
      {"messId": 3, "textValue": "I was thinking we could go hiking or something. The weather's supposed to be nice.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:07:00.000Z"},
      {"messId": 4, "textValue": "That sounds like a great idea! What time were you thinking?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:08:00.000Z"},
      {"messId": 5, "textValue": "How about we meet at the trailhead around 10am?", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:09:00.000Z"},
      {"messId": 6, "textValue": "Sounds good to me. Which trail were you thinking of?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:10:00.000Z"},
      {"messId": 7, "textValue": "I was thinking we could do the Eagle's Nest Trail. It's supposed to have some great views.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:11:00.000Z"},
      {"messId": 8, "textValue": "I've never done that one before, but it sounds awesome! Can't wait!", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:12:00.000Z"},
      {"messId": 9, "textValue": "Me neither! It's been a while since I've gone hiking, so this should be fun.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:13:00.000Z"},
      {"messId": 10, "textValue": "Definitely! See you Saturday at 10am.", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:14:00.000Z"}
      ]
    },
    {
      "id": 8,
      "name": "عسل",
      "strId": "amir234",
      "bio": "سلام، من امیر هستم. به دنبال شروع کار در حوزه بازاریابی هستم.",
      "lastOnline": "2023-06-26T18:00:00Z",
      "profilePicUrl": "img/9.jpg",
      'messages':[
      {"messId": 1, "textValue": "Hey, did you see the new movie that just came out?", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:15:00.000Z"},
      {"messId": 2, "textValue": "No, I haven't had a chance to go to the theater lately. Which movie are you talking about?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:16:00.000Z"},
      {"messId": 3, "textValue": "It's called 'The Last Stand'. It's supposed to be a really good action movie.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:17:00.000Z"},
      {"messId": 4, "textValue": "Oh yeah, I've heard of that one. Maybe we should go see it together this weekend?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:18:00.000Z"},
      {"messId": 5, "textValue": "That sounds like a great idea! How about we meet at the theater on Saturday at 7pm?", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:19:00.000Z"},
      {"messId": 6, "textValue": "Sure, that works for me. Do you want to grab dinner before the movie?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:20:00.000Z"},
      {"messId": 7, "textValue": "Yeah, that's a good idea. How about we meet at the restaurant across the street from the theater at 5pm?", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:21:00.000Z"},
      {"messId": 8, "textValue": "Sounds good to me. I'm looking forward to it.", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:22:00.000Z"},
      {"messId": 9, "textValue": "Me too! It should be a fun night out.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:23:00.000Z"},
      {"messId": 10, "textValue": "Definitely. See you on Saturday!", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:24:00.000Z"}
      ]
    },
    {
      "id": 9,
      "name": "فاطمه",
      "strId": "shayan567",
      "bio": "سلام، من شایان هستم. عاشق ورزش و تناسب اندام هستم.",
      "lastOnline": "2023-06-26T07:40:00Z",
      "profilePicUrl": "img/10.jpg",
      'messages':[
      {"messId": 1, "textValue": "Hey, how was your weekend?", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:25:00.000Z"},
      {"messId": 2, "textValue": "It was good, thanks for asking. I went to a friend's barbecue on Saturday and then relaxed at home on Sunday. How about you?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:26:00.000Z"},
      {"messId": 3, "textValue": "I had a pretty busy weekend myself. I ran some errands on Saturday and then went to a family gathering on Sunday.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:27:00.000Z"},
      {"messId": 4, "textValue": "That sounds like fun. What did you guys do at the family gathering?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:28:00.000Z"},
      {"messId": 5, "textValue": "We just hung out, ate some food, and caught up with each other. It was nice to see everyone again.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:29:00.000Z"},
      {"messId": 6, "textValue": "That sounds like a great way to spend a Sunday. Speaking of catching up, we haven't seen each other in a while. Do you want to grab lunch this week?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:30:00.000Z"},
      {"messId": 7, "textValue": "Yeah, I'd love to! How about we meet at that new sandwich place on Main Street on Wednesday at noon?", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:31:00.000Z"},
      {"messId": 8, "textValue": "Sounds good to me. I'll see you there!", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:32:00.000Z"},
      {"messId": 9, "textValue": "Great! Can't wait to catch up.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:33:00.000Z"},
      {"messId": 10, "textValue": "Me too. See you on Wednesday!", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:34:00.000Z"}
    ]
   },
   {
        "id": 10,
        "name": "رضا",
        "strId": "mohammad012",
        "bio": "سلام، من محمد هستم. عاشق سفر و کتاب خوانی هستم.",
        "lastOnline": "2023-06-26T08:00:00Z",
        "profilePicUrl": "img/5.jpg",
        'messages': [
          {"messId":1,"textValue":"Hey, how's it going?","sender":0,"delStatus":"sent","sendtime":"2023-06-27T14:40:00.000Z"},
          {"messId":2,"textValue":"Not too bad, thanks for asking. What about you?","sender":1,"delStatus":"unsent","sendtime":"2023-06-27T14:41:20.000Z"},
          {"messId":3,"textValue":"I'm doing pretty well.","sender":0,"delStatus":"delivered","sendtime":"2023-06-27T14:42:45.000Z"},
          {"messId":4,"textValue":"That's good to hear. So what have you been up to lately?","sender":1,"delStatus":"unsent","sendtime":"2023-06-27T14:44:15.000Z"},
          {"messId":5,"textValue":"Not too much, just working and hanging out with friends. How about you?","sender":0,"delStatus":"sent","sendtime":"2023-06-27T14:45:30.000Z"},
          {"messId":6,"textValue":"Same here, just trying to stay busy.","sender":1,"delStatus":"unsent","sendtime":"2023-06-27T14:47:00.000Z"},
          {"messId":7,"textValue":"Yeah, it can be tough sometimes. Have you made any plans for the weekend?","sender":0,"delStatus":"sent","sendtime":"2023-06-27T14:48:20.000Z"},
          {"messId":8,"textValue":"Not yet, I'm still trying to figure out what to do. Do you have any suggestions?","sender":1,"delStatus":"unsent","sendtime":"2023-06-27T14:50:00.000Z"},
          {"messId":9,"textValue":"Well, there's a new movie that just came out that looks pretty good. Or we could go hiking if you're up for it.","sender":0,"delStatus":"delivered","sendtime":"2023-06-27T14:51:30.000Z"},
          {"messId":10,"textValue":"Those both sound like fun options. Let me think about it and get back to you.","sender":1,"delStatus":"unsent","sendtime":"2023-06-27T14:53:00.000Z"}
        ]
      },
      {
        "id": 11,
        "name": "هانا",
        "strId": "fatemeh345",
        "bio": "سلام، من فاطمه هستم. به دنبال شروع کار در حوزه آموزش هستم.",
        "lastOnline": "2023-06-25T22:30:00Z",
        "profilePicUrl": "img/6.jpg",
        'messages':[
        {"messId": 1, "textValue": "Hey there!", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:45:00.000Z"},
        {"messId": 2, "textValue": "Hi! How are you?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:46:00.000Z"},
        {"messId": 3, "textValue": "I'm doing well. Thanks for asking.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:47:00.000Z"},
        {"messId": 4, "textValue": "That's good to hear.", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:48:00.000Z"},
        {"messId": 5, "textValue": "What have you been up to lately?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:49:00.000Z"},
        {"messId": 6, "textValue": "Not much, just been busy with work.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:50:00.000Z"},
        {"messId": 7, "textValue": "Ah, I see. What kind of work do you do?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:51:00.000Z"},
        {"messId": 8, "textValue": "I work in software development.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:52:00.000Z"},
        {"messId": 9, "textValue": "That's cool! I'm a designer myself.", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:53:00.000Z"},
        {"messId": 10, "textValue": "Nice! We should collaborate on a project sometime.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:54:00.000Z"}
        ]
      },
      {
        "id": 12,
        "name": "صادق",
        "strId": "maryam678",
        "bio": "سلام، من مریم هستم. عاشق موسیقی و تئاتر هستم.",
        "lastOnline": "2023-06-26T16:20:00Z",
        "profilePicUrl": "img/7.jpg",
        'messages':[
        {"messId": 1, "textValue": "Hey there! How are you?", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:55:00.000Z"},
        {"messId": 2, "textValue": "I'm doing well, thanks for asking. How about you?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:56:00.000Z"},
        {"messId": 3, "textValue": "I'm good too, just a bit busy with work.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:57:00.000Z"},
        {"messId": 4, "textValue": "Yeah, same here. Have you made any progress on that project we were discussing?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T14:58:00.000Z"},
        {"messId": 5, "textValue": "Yes, I've been working on it whenever I have some free time. It's coming along nicely.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T14:59:00.000Z"},
        {"messId": 6, "textValue": "That's great to hear. Let me know if you need any help with it.", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:00:00.000Z"},
        {"messId": 7, "textValue": "Thanks, I appreciate it. I might take you up on that offer.", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:01:00.000Z"},
        {"messId": 8, "textValue": "No problem. So, how's your family doing?", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:02:00.000Z"},
        {"messId": 9, "textValue": "They're all doing well, thanks for asking. How about yours?", "sender": 0, "delStatus": "unsent", "sendtime": "2023-06-27T15:03:00.000Z"},
        {"messId": 10, "textValue": "Everyone's good on my end as well. Thanks for asking.", "sender": 1, "delStatus": "unsent", "sendtime": "2023-06-27T15:04:00.000Z"}
        ]
      },
      ]
    
    
pageBody = getId('page-body')
window.addEventListener('load' , loadHandler)
pageBody.addEventListener('keydown' , closeContextByEsc)


function newUserBox (Name , message , profUrl) {
    userBox = document.createElement('div')
    userBox.classList.add('user-box')
    userBox.addEventListener('click' , userClick)
    userBox.addEventListener('click' , loadMessages)

    userProf = document.createElement('div')
    userProf.classList.add('user-prof')
     
    profilePicture = document.createElement('img')
    profilePicture.setAttribute('src' , profUrl)


    userInfo = document.createElement('div')
    userInfo.classList.add('user-info')

    userName = document.createElement('h3')
    userName.innerHTML = Name
    userName.classList.add('user-name')

    lastMessage = document.createElement('p')
    lastMessage.innerHTML = message
    lastMessage.classList.add('last-message')
    
    usersBox.append(userBox)
    userBox.append(userProf , userInfo)
    userProf.append(profilePicture)
    userInfo.append(userName , lastMessage)
    



}

function loadHandler (event) {
  front = getClass('front')
  front.innerHTML = ''

  chatContainer = crElm('div')
  chatContainer.setAttribute('id','chatContainer')

  usersBox = crElm('div')
  usersBox.classList.add('users')
  
  chatSection = crElm('div')
  chatSection.classList.add('chatsec')

  selectBox = crElm('div')
  selectBox.classList.add('select-box')

  selectBoxValue = crElm('h1')
  selectBoxValue.innerHTML = 'select chat '

  front.append(chatContainer)
  chatContainer.append(usersBox , chatSection)
  chatSection.append(selectBox)
  selectBox.append(selectBoxValue)
  for(let i = 0 ; i < userChats.length ; i++){
    newUserBox(userChats[i].name , userChats[i].strId , userChats[i].profilePicUrl)
 }



}


function userClick (event) {
    chatSection.innerHTML =''



    chatHeader = crElm('div')
    chatHeader.classList.add('chat-header')

    informations = crElm('div')
    informations.classList.add('informations')

    userprofile = crElm('div')
    userprofile.classList.add('userprofile')

    userProfPic = crElm('img')
    userProfPic.setAttribute('src' , event.target.firstElementChild.firstElementChild.getAttribute('src'))

    username = crElm('div')
    username.classList.add('username')

    userHeaderName = crElm('h1')
    userHeaderName.classList.add('userHeaderName')
    userHeaderName.innerHTML = event.target.lastElementChild.firstElementChild.innerHTML
  

    lastOnline = crElm('p')
    lastOnline.classList.add('lastOnline')

    chatSection.append(chatHeader)
    chatHeader.append(informations)
    informations.append(userprofile , username)
    userprofile.append(userProfPic)
    username.append(userHeaderName , lastOnline)


    chatBody  = crElm('div')
    chatBody.classList.add('chat-body')
    chatBody.addEventListener('contextmenu' , rightClick)
    chatBody.addEventListener('click' , closeContext)
    
    chats  = crElm('div')
    chats.classList.add('chats')
    
    datemessage  = crElm('div')
    datemessage.classList.add('datemessage')

    dateValue = crElm('p')
    dateValue.classList.add('date-value')
    dateValue.innerHTML = 'today'

    myTextValue = crElm('p')
    myTextValue.classList.add('my-text-value')
    myTextValue.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi maiores cupiditate id repellat libero eaque perferendis nulla doloremque earum, similique, molestias consequuntur dicta voluptates, possimus animi architecto voluptate qui!'

    myTimeValue = crElm('p')
    myTimeValue.classList.add('my-time-value')
    myTimeValue.innerHTML = '12:34'

    statusValue = crElm('p')
    statusValue.classList.add('status-value')
    statusValue.innerHTML = 'seen'



    mymessage =  crElm('div')
    mymessage.classList.add('mymessage')
    mymessage.addEventListener('contextmenu' , rightClick)

    myText  = crElm('div')
    myText.classList.add('my-text')

    myTextInfo  = crElm('div')
    myTextInfo.classList.add('my-text-info')

    mytime = crElm('div')
    mytime.classList.add('mytime')

    Status =  crElm('div')
    Status.classList.add('status')

    yourmessage  = crElm('div')
    yourmessage.classList.add('yourmessage')
    yourmessage.addEventListener('contextmenu' , rightClick)

    yourText  = crElm('div')
    yourText.classList.add('your-text')

    yourTime  = crElm('div')
    yourTime.classList.add('your-time')

    yourTextValue = crElm('p')
    yourTextValue.classList.add('your-text-value')
    yourTextValue.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eligendi inventore quos veniam ullam, officia qui quisquam? Quam, nesciunt dignissimos, magni officia voluptas illo sapiente sit cum eligendi eius corrupti.'

    yourTimeValue = crElm('p')
    yourTimeValue.classList.add('your-time-value')
    yourTimeValue.innerHTML = '12:36'

    chatSection.append(chatBody)
    chatBody.append(chats)
    chats.append(datemessage , mymessage , yourmessage)
    datemessage.append(dateValue)
    mymessage.append(myText , myTextInfo)
    myText.append(myTextValue)
    myTextInfo.append(mytime , Status)
    mytime.append(myTimeValue)
    Status.append(statusValue)
    yourmessage.append(yourText , yourTime)
    yourText.append(yourTextValue)
    yourTime.append(yourTimeValue)


    chatFooter = crElm('div')
    chatFooter.classList.add('chat-footer')

    typeBox = crElm('div')
    typeBox.classList.add('type-box')

    typeInput = crElm('input')
    typeInput.classList.add('type-input')
    typeInput.setAttribute('type' , 'text')
    typeInput.setAttribute('placeholder' , 'write your message ...')
    typeInput.addEventListener('keydown' , sendMessageByEnter)

    sendButton = crElm('button')
    sendButton.classList.add('send-button')
    sendButton.addEventListener('click' , sendMessage)
   
    faFaPaperPlane = crElm('i')
    faFaPaperPlane.classList.add('fa' , 'fa-paper-plane')

    chatSection.append(chatFooter)
    chatFooter.append(typeBox)
    typeBox.append(typeInput , sendButton)
    sendButton.append(faFaPaperPlane)
}
// newUserBox ('mamad' , 'chetori eshgham' , 'img/1.png')

 function sendMessage (event){
    eventTarget2 = event
    
    if(eventTarget2.target.getAttribute('class') === 'fa fa-paper-plane'){
      newMessageObj = {
        'messId' : (foundUser.messages.length + 1) ,
        "textValue": eventTarget2.target.parentElement.parentElement.firstElementChild.value ,
        "sender": 1,
        "delStatus":'sent',
        "sendtime": "2023-06-27T15:31:00.000Z"}
      foundUser.messages.push(newMessageObj)
      myTextValue = crElm('p')
      myTextValue.classList.add('my-text-value')
      myTextValue.innerHTML = newMessageObj.textValue
  
      myTimeValue = crElm('p')
      myTimeValue.classList.add('my-time-value')
      myTimeValue.innerHTML = newMessageObj.sendtime
  
      statusValue = crElm('p')
      statusValue.classList.add('status-value')
      statusValue.innerHTML = newMessageObj.delStatus
  
  
      mymessage =  crElm('div')
      mymessage.classList.add('mymessage')
      mymessage.addEventListener('contextmenu' , rightClick)
  
      myText  = crElm('div')
      myText.classList.add('my-text')
  
      myTextInfo  = crElm('div')
      myTextInfo.classList.add('my-text-info')
  
      mytime = crElm('div')
      mytime.classList.add('mytime')
  
      Status =  crElm('div')
      Status.classList.add('status')
      chats.append(mymessage)
      mymessage.append(myText , myTextInfo)
      myText.append(myTextValue)
      myTextInfo.append(mytime , Status)
      mytime.append(myTimeValue)
      Status.append(statusValue)
      eventTarget2.target.parentElement.parentElement.firstElementChild.value = ''
      chatSection.scrollBy(0 ,chatSection.scrollHeight - chatSection.clientHeight)
    }else{
    // eventTarget2.target.parentElement.firstElementChild.value
    newMessageObj = {
      'messId' : (foundUser.messages.length + 1) ,
      "textValue": eventTarget2.target.parentElement.firstElementChild.value ,
      "sender": 1,
      "delStatus":'sent',
      "sendtime": "2023-06-27T15:31:00.000Z"}
    foundUser.messages.push(newMessageObj)
    myTextValue = crElm('p')
    myTextValue.classList.add('my-text-value')
    myTextValue.innerHTML = newMessageObj.textValue

    myTimeValue = crElm('p')
    myTimeValue.classList.add('my-time-value')
    myTimeValue.innerHTML = newMessageObj.sendtime

    statusValue = crElm('p')
    statusValue.classList.add('status-value')
    statusValue.innerHTML = newMessageObj.delStatus


    mymessage =  crElm('div')
    mymessage.classList.add('mymessage')
    mymessage.addEventListener('contextmenu' , rightClick)

    myText  = crElm('div')
    myText.classList.add('my-text')

    myTextInfo  = crElm('div')
    myTextInfo.classList.add('my-text-info')

    mytime = crElm('div')
    mytime.classList.add('mytime')

    Status =  crElm('div')
    Status.classList.add('status')
    chats.append(mymessage)
    mymessage.append(myText , myTextInfo)
    myText.append(myTextValue)
    myTextInfo.append(mytime , Status)
    mytime.append(myTimeValue)
    Status.append(statusValue)
    eventTarget2.target.parentElement.firstElementChild.value = ''
    chatSection.scrollBy(0 ,chatSection.scrollHeight - chatSection.clientHeight)
    }
   

    
}  
function sendMessageByEnter(event){
  if(event.code === 'Enter' || event.code === 'NumpadEnter'){
    event.preventDefault()
  eventTarget3 = event
  newMessageObj = {
    'messId' : (foundUser.messages.length + 1) ,
    "textValue": eventTarget3.target.value ,
    "sender": 1,
    "delStatus":'sent',
    "sendtime": "2023-06-27T15:31:00.000Z"}
  foundUser.messages.push(newMessageObj)
  myTextValue = crElm('p')
  myTextValue.classList.add('my-text-value')
  myTextValue.innerHTML = newMessageObj.textValue

  myTimeValue = crElm('p')
  myTimeValue.classList.add('my-time-value')
  myTimeValue.innerHTML = newMessageObj.sendtime

  statusValue = crElm('p')
  statusValue.classList.add('status-value')
  statusValue.innerHTML = newMessageObj.delStatus


  mymessage =  crElm('div')
  mymessage.classList.add('mymessage')
  mymessage.addEventListener('contextmenu' , rightClick)

  myText  = crElm('div')
  myText.classList.add('my-text')

  myTextInfo  = crElm('div')
  myTextInfo.classList.add('my-text-info')

  mytime = crElm('div')
  mytime.classList.add('mytime')

  Status =  crElm('div')
  Status.classList.add('status')
  chats.append(mymessage)
  mymessage.append(myText , myTextInfo)
  myText.append(myTextValue)
  myTextInfo.append(mytime , Status)
  mytime.append(myTimeValue)
  Status.append(statusValue)
  eventTarget3.target.value = ''
  chatSection.scrollBy(0 ,chatSection.scrollHeight - chatSection.clientHeight)
  }

}
function rightClick (event){
  event.preventDefault()
  contextMenu = getId('contextMenu')
  contextMenu.style.display = 'flex'
  contextMenu.style.position = 'absolute'
  contextMenu.style.top = event.pageY + 'px'
  contextMenu.style.left = event.pageX + 'px'
}
function closeContext() {
  contextMenu = getId('contextMenu')
  if ( contextMenu.style.display == 'flex'){
    contextMenu.style.display = 'none'
  }
}
function closeContextByEsc(event){
  if (event.code === 'Escape'){
    if ( contextMenu.style.display == 'flex'){
      contextMenu.style.display = 'none'
    }
  }

}
function loadMessages (event){
 foundUser =  userChats.find(function(usersarr){
    return usersarr.strId == event.target.lastElementChild.lastElementChild.innerHTML
  })
  foundUser.messages.forEach(function(messagesValue ){
    if(messagesValue.sender === 0){
      yourmessage  = crElm('div')
      yourmessage.classList.add('yourmessage')
      yourmessage.addEventListener('contextmenu' , rightClick)
  
      yourText  = crElm('div')
      yourText.classList.add('your-text')
  
      yourTime  = crElm('div')
      yourTime.classList.add('your-time')
  
      yourTextValue = crElm('p')
      yourTextValue.classList.add('your-text-value')
      yourTextValue.innerHTML = messagesValue.textValue
  
      yourTimeValue = crElm('p')
      yourTimeValue.classList.add('your-time-value')
      yourTimeValue.innerHTML = messagesValue.sendtime
  
      chats.append(yourmessage)
      yourmessage.append(yourText , yourTime)
      yourText.append(yourTextValue)
      yourTime.append(yourTimeValue)
    } else{
      myTextValue = crElm('p')
    myTextValue.classList.add('my-text-value')
    myTextValue.innerHTML = messagesValue.textValue

    myTimeValue = crElm('p')
    myTimeValue.classList.add('my-time-value')
    myTimeValue.innerHTML = messagesValue.sendtime

    statusValue = crElm('p')
    statusValue.classList.add('status-value')
    statusValue.innerHTML = messagesValue.delStatus


    mymessage =  crElm('div')
    mymessage.classList.add('mymessage')
    mymessage.addEventListener('contextmenu' , rightClick)

    myText  = crElm('div')
    myText.classList.add('my-text')

    myTextInfo  = crElm('div')
    myTextInfo.classList.add('my-text-info')

    mytime = crElm('div')
    mytime.classList.add('mytime')

    Status =  crElm('div')
    Status.classList.add('status')
    chats.append(mymessage)
    mymessage.append(myText , myTextInfo)
    myText.append(myTextValue)
    myTextInfo.append(mytime , Status)
    mytime.append(myTimeValue)
    Status.append(statusValue)
    }
  })
}