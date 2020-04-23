// OPZIONALE (in una cartella a parte dal codice per l’esercizio degli oggetti)
// Riprodurre la piccola chat fatta insieme durante la lezione utilizzando handlerbars.

$(document).ready(function () {
    //  refs
    var input = $(".mess-input");
    var button = $(".mess-btn");

    // Init handlebars
    var source = $("#message-template").html();
    var template = Handlebars.compile(source);

    input.keyup(function (e) {
        if (e.which == 13 || e.keyCode == 13) {
            sendMsg();
        }
    });

    button.click(function () {
        sendMsg();
    });

    /**
     * FUNCTIONS
     */

    function sendMsg() {
        msgDisplay(input.val().trim());
        setTimeout(function () {
            msgDisplay(answGenerator(), "received");
        }, 1000);
    }

    function msgDisplay(message, status = "sent") {
        var data = {
            text: message,
            time: "12:12",
            userClass: status,
        };

        // output
        var html = template(data);
        $(".chat").append(html);

        input.val("");
        scrollDown();
    }

    // Scrolldown
    function scrollDown() {
        let pixelScroll = $(".chat").height();

        $(".chat").scrollTop(pixelScroll);
    }

    /**
     * Generates an answer
     */
    function answGenerator() {
        var answer = "";

        answer += randomFromArr([
            randomFromArr([
                "What a nice day!",
                "It's sunny today.",
                "It's a sunny day out.",
                "It's such a nice day.",
                "It's such a great day to be alive!",
                "This is a happy kind of day.",
                "I feel great.",
                "Ooh, I'm feeling fine.",
                "I'm feeling awesome.",
                "Hey, this is great!",
                "I'm so glad I came here.",
                "I regret nothing!",
                "Regrets are pointless.",
                "I have no regrets.",
                "This is what I wanted!",
                "Everything's going just fine.",
                "I can't wait!",
                "Things are going smoothly.",
                "I'm just happy to be here.",
                "Well, this is " +
                    randomFromArr([
                        "unexpected",
                        "awkward",
                        "fun",
                        "just funny",
                        "strange",
                        "interesting",
                        "odd",
                        "peculiar",
                        "weird",
                    ]) +
                    ".",
                "I know the meaning of life!",
                "I didn't expect this!",
                "I'm glad someone understands me.",
                "I'm glad someone likes me for who I am.",
                "I love my friends!",
                "Life is good!",
                "I could picture myself spending the rest of my life here.",
                "I should meet new friends!",
                "I feel loved.",
                "I feel almighty!",
                "I matter.",
                "This place is nice.",
                "Everybody's great in some way!",
                "I hope " +
                    randomFromArr(["they", "she", "he"]) +
                    "'ll like me!",
                "I wonder what happens next!",
                "It's all going to be alright.",
                "It'll all be alright in the end. I just know it.",
                "This is actually okay.",
                "I love the whole world!",
                "The world is a big place!",
                "The world is amazing!",
                "So it has come to this.",
                "Well this is an interesting development.",
                "Let's see what happens next.",
                "Oh hey. I found me.",
                "I NEED to blog about this.",
            ]),
            randomFromArr([
                "I should take a self-help course!",
                "I'm doing alright.",
                "My job is pretty fulfilling.",
                "I don't really worry.",
                "Worrying is pointless!",
                "This is cooler than I expected!",
                "Haha, this is just like me.",
                "Wouldn't it be awesome if I was " +
                    randomFromArr([
                        "a pirate",
                        "a dolphin",
                        "an unicorn",
                        "a panda",
                        "a cyborg",
                        "a robot",
                        "a superhero",
                        "invisible",
                    ]) +
                    "?",
                "I'm pretty self-confident.",
                "I'm a pretty big deal.",
                "I'm pretty extreme.",
                randomFromArr([
                    "You want a piece of this?",
                    "I'm all business, all the time.",
                    "I vibrate through walls.",
                    "This is going to be gay as hell.",
                    "We're making this happen!",
                ]),
                "I mean, wow.",
                "Yep. Just a regular human person. Nothing to see here.",
                "I want to become even better!",
                "I should learn a new " +
                    randomFromArr(["skill", "language"]) +
                    "!",
                "I hope I'll become a nice old person.",
                "I kinda miss my youth!",
                "I should call " +
                    randomFromArr(["her", "him"]) +
                    ' and say "I love you"!',
                "Maybe I should call my parents?",
                "You can always better yourself.",
                "Do I really suck at " +
                    randomFromArr([
                        "singing",
                        "painting",
                        "dancing",
                        "writing",
                        "video-games",
                        "maths",
                    ]) +
                    "?",
                "I'm secretly " +
                    randomFromArr([
                        "super-hardcore",
                        "perfectly normal",
                        "perfectly ordinary",
                        "peeking over your shoulder right now",
                        "a wizard",
                        "the smartest person in the world",
                        "the wisest person in the world",
                        "the most important person in the world",
                        "a spider",
                        "a robot",
                        "a midget",
                        "a very ancient ghost",
                        "an extra-terrestrial",
                        "a tree",
                        "a flower",
                        "a shark",
                        "a bear",
                        "my own cousin",
                        "an astral monstrosity",
                        "a secret",
                    ]) +
                    "!",
                "H-here I go!",
                "This place would look good on fire!",
                "I don't worry, because I know nothing matters in the end.",
                "Well, I'm glad nobody can read my mind.",
            ]),
            randomFromArr([
                "Hmm! I should get",
                "I know what would be awesome...",
                "Time for",
                "I need",
                "You know what? I need",
                "Know what I need? I'll tell you - ",
            ]) +
                " " +
                randomFromArr([
                    "some new shoes",
                    "a new TV",
                    "a new computer",
                    "a new car",
                    "a bigger house",
                    "a cooler job",
                    "a lover",
                    "more pets",
                    "a makeover",
                    "a good movie",
                    "a nice dinner in town",
                ]) +
                "!",
            randomFromArr([
                "This is the best relationship ever.",
                "I love being married!",
                "Marriage isn't as bad as they make it out to be!",
                "This relationship is awesome!",
                "I love my family.",
                "I love doing stuff with my family.",
            ]),
            randomFromArr([
                randomFromArr([
                    "I really, really like",
                    "I can't get enough of",
                    "I'm going to get more of",
                    "I wonder what they put in",
                ]) +
                    " " +
                    randomFromArr([
                        "this hamburger",
                        "this steak",
                        "this salad",
                        "this pasta",
                        "this sandwich",
                        "this pizza",
                        "this meal",
                        "this beer",
                        "this soda",
                    ]) +
                    ".",
                randomFromArr([
                    "Haha, I love that show!",
                    "That show is confusing!",
                    "That show is hilarious.",
                    "That's a silly show, but there's nothing on TV anyway.",
                    "Oooh, my parents used to watch that show!",
                    "There's nothing on TV!",
                    "That movie's plot is hilariously bad.",
                    "I've never seen that movie before!",
                ]),
            ]),
        ]);
        return answer;
    }

    /**
     * Choose a random array
     * @arr {arr} pass an array as max
     * @min {int} min
     */
    function randomFromArr(arr, min = 0) {
        return arr[
            Math.floor(Math.random() * Math.floor(arr.length - min)) + min
        ];
    }

    //
}); // end Doc ready
