let count = 0;

function showMessage() 
{
    alert("Hello! You clicked the alert button.");
}

function changeText() 
{
    document.getElementById("description").innerHTML =
        "Text changed dynamically using JavaScript!";
}

function toggleTheme() 
{
    document.body.classList.toggle("dark-mode");
}

function increaseCount() 
{
    count++;
    document.getElementById("counter").innerHTML =
        "Button clicked: " + count + " times";
}

document.getElementById("hoverText").addEventListener("mouseover", function () 
{
    this.innerHTML = "You are hovering over me...";
});

document.getElementById("hoverText").addEventListener("mouseout", function () 
{
    this.innerHTML = "Hover over this text";
});
