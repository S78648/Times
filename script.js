
function fetchArticles() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/getTimeStories', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const stories = JSON.parse(xhr.responseText);
           // console.log(stories)
            const storyList = document.getElementById('storyList');
            storyList.innerHTML = ''; 

            stories.forEach(article => {
                const listItem = document.createElement('div');
                listItem.innerHTML = `<a href="${article.link}" target="_blank">${article.title}</a>
                <span>Reading Time: ${article.readingTime}</span>, <span>Date: ${article.datetime}</span>`;
                storyList.appendChild(listItem);
            });
            
        } else {
            console.error('Request failed. Status:', xhr.status);
        }
    };
    xhr.send();
}

const getStory = document.getElementById("getStory");
getStory.addEventListener('click',fetchArticles);