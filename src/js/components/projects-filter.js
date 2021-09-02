const projectsFilter = () => {
    const btns = document.querySelectorAll(".projects__filter button");
    const projects = document.querySelectorAll(".projects__item");

    const addActiveClass = (index) => {
        btns.forEach((item) => {
            item.classList.remove("active");
        });

        btns[index].classList.add("active");
    };

    const filterName = (e) => {
        let filter;
        e.target.classList.forEach((btnClass) => {
            if (btnClass !== "active") {
                filter = btnClass;
            }
        });

        return filter;
    };

    const showProjects = (filter) => {
        projects.forEach((item) => {
            item.classList.add("hidden");

            item.classList.forEach((projectClass) => {
                if (projectClass === filter) {
                    item.classList.remove("hidden");
                }
            });
        });
    };

    btns.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            addActiveClass(index);

            const filter = filterName(e);
            showProjects(filter);
        });
    });
};

export default projectsFilter;
