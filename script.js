document.addEventListener("DOMContentLoaded", () => {
    // Dynamic quotes
    const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Act as if what you do makes a difference. It does. – William James",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    "Opportunities don't happen. You create them. – Chris Grosser",
    "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character. – Unknown",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. – Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. – Rob Siltanen",
    "Failure will never overtake me if my determination to succeed is strong enough. – Og Mandino",
    "We may encounter many defeats but we must not be defeated. – Maya Angelou",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do. – Johann Wolfgang Von Goethe",
    "Imagine your life is perfect in every respect; what would it look like? – Brian Tracy",
    "We generate fears while we sit. We overcome them by action. – Dr. Henry Link",
    "Whether you think you can or think you can’t, you’re right. – Henry Ford",
    "Do what you can with all you have, wherever you are. – Theodore Roosevelt",
    "You are never too old to reinvent yourself. – Steve Harvey",
    "Dream big and dare to fail. – Norman Vaughan",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
    "Success is how high you bounce when you hit bottom. – George S. Patton",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. – Jamie Paolinetti",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Do not be embarrassed by your failures, learn from them and start again. – Richard Branson",
    "Courage is resistance to fear, mastery of fear—not absence of fear. – Mark Twain",
    "Perfection is not attainable, but if we chase perfection, we can catch excellence. – Vince Lombardi",
    "Your true success in life begins only when you make the commitment to become excellent at what you do. – Brian Tracy",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Quality is not an act, it is a habit. – Aristotle",
    "Only I can change my life. No one can do it for me. – Carol Burnett",
    "Don’t count the days, make the days count. – Muhammad Ali",
    "If you can dream it, you can do it. – Walt Disney",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "All progress takes place outside the comfort zone. – Michael John Bobak",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "Don’t limit your challenges. Challenge your limits. – Unknown",
    "The harder the conflict, the greater the triumph. – George Washington",
    "Do something today that your future self will thank you for. – Sean Patrick Flanery",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "If opportunity doesn’t knock, build a door. – Milton Berle",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently. – Marie Forleo",
    "The best way to predict the future is to create it. – Peter Drucker",
    "You are the artist of your own life. Don’t hand the paintbrush to anyone else. – Unknown",
    "Small progress is still progress. – Unknown",
    "Every day may not be good, but there is something good in every day. – Alice Morse Earle",
    "Stay close to anything that makes you glad you are alive. – Hafiz",
    "Be so good they can’t ignore you. – Steve Martin",
    "The man who has confidence in himself gains the confidence of others. – Hasidic Proverb",
    "Your only limit is your mind. – Unknown",
    "Push yourself, because no one else is going to do it for you. – Unknown",
    "Great things never come from comfort zones. – Unknown",
    "Dream it. Wish it. Do it. – Unknown",
    "Success doesn’t just find you. You have to go out and get it. – Unknown",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
    "Dream bigger. Do bigger. – Unknown",
    "Don’t stop when you’re tired. Stop when you’re done. – Unknown",
    "Wake up with determination. Go to bed with satisfaction. – Unknown",
    "Do something today that your future self will thank you for. – Unknown",
    "Little things make big days. – Unknown",
    "It’s going to be hard, but hard does not mean impossible. – Unknown",
    "Don’t wait for opportunity. Create it. – Unknown",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. – Unknown",
    "The key to success is to focus on goals, not obstacles. – Unknown",
    "Dream it. Believe it. Build it. – Unknown"
];


    const quoteButton = document.getElementById("quoteButton");
    const quoteDisplay = document.getElementById("quoteDisplay");

    if (quoteButton) {
        quoteButton.addEventListener("click", () => {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            quoteDisplay.textContent = randomQuote;
        });
    }

    // Blog posts
    const blogList = document.getElementById("blogList");
    const blogs = [
        { title: "Overcoming Challenges", content: "Learn how to tackle life's toughest challenges." },
        { title: "The Power of Positive Thinking", content: "Discover how positivity can change your life." },
        { title: "Habits for Success", content: "Develop daily habits that lead to long-term success." }
    ];

    blogs.forEach(blog => {
        const blogItem = document.createElement("div");
        blogItem.classList.add("blog-item");
        blogItem.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.content}</p>
        `;
        blogList.appendChild(blogItem);
    });

    // Theme toggle
    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
        });
    }
});
