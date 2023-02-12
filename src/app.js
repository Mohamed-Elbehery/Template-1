      // Creating the Default theme
      const changeTheme = () => {
        if (localStorage.theme) {
          if (localStorage.getItem("theme") === "dark") {
            document.body.style =
              "background-color: black; color: white; transition: 0.3s;";
          } else {
            document.body.style =
              "background-color: rgba(211, 211, 211, 0.2); color: black; transition: 0.3s;";
            localStorage.setItem("theme", "light");
          }
        }
      };

      // Services cards
      const servicesCards = document.querySelectorAll(
        ".services .services-cards .services-card"
      );

      // News cards
      const newsCards = document.querySelectorAll(".news-card");

      // Creating the Theme in Local Storage and Applying the Changes
      const theme = document.querySelector("#theme");
      theme.addEventListener("click", () => {
        if (localStorage.theme === "light") {
          localStorage.setItem("theme", "dark");
        } else {
          localStorage.setItem("theme", "light");
        }
        // Calling the functions to apply the changes after clicking directly
        applyTheme();
      });

      const applyThemeChanges = (
        sectionCards,
        dBackgroundColor,
        wBackgroundColor,
        dColor,
        wColor,
        d2Color,
        w2Color
      ) => {
        sectionCards.forEach((card) => {
          if (localStorage.theme === "dark") {
            card.style.backgroundColor = dBackgroundColor;
            card.children[1].children[1].style.color = dColor;
            card.children[1].children[2].style.color = d2Color;
            theme.innerText = "Light Mode";
          } else {
            card.style.backgroundColor = wBackgroundColor;
            card.children[1].children[1].style.color = wColor;
            card.children[1].children[2].style.color = w2Color;
            theme.innerText = "Dark Mode";
          }
        });
      };

      const applyThemeChangesNews = () => {
        newsCards.forEach((card) => {
          if (localStorage.theme === "dark") {
            card.style.backgroundColor = "#717cff";
            card.children[1].children[0].style.backgroundColor = "white";
            card.children[1].children[1].style.color = "#d3d3d3";
            card.children[1].children[2].style.color = "white";
          } else {
            card.style.backgroundColor = "white";
            card.children[1].children[0].style.backgroundColor = "transparent";
            card.children[1].children[1].style.color = "gray";
            card.children[1].children[2].style.color = "black";
          }
        });
      };

      const applyTheme = () => {
        changeTheme();
        applyThemeChanges(
          servicesCards,
          "#717cff",
          "white",
          "white",
          "gray",
          "#c0c0c0",
          "#717cff"
        );
        applyThemeChangesNews();
      };

      // Adding the Active Class to the Targeted li or dot
      const lis = document.querySelectorAll("header ul li");
      const dots = document.querySelectorAll(".dots .dot");

      const addActiveClass = (array) => {
        array.forEach((element) => {
          element.addEventListener("click", (e) => {
            if (e.target.classList[0] === "btn" || e.target.id === "theme") {
              return;
            }
            array.forEach((element) => {
              element.classList.remove("active");
            });
            e.target.classList.add("active");
          });
        });
      };

      addActiveClass(lis);
      addActiveClass(dots);

      // Applying the theme on loading the page
      window.onload = () => {
        applyTheme();
      };