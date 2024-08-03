const circleSocialIcons = document.querySelectorAll('.social-media-icons');

circleSocialIcons.forEach((icon)=>{
    icon.addEventListener('mouseover', ()=>{
        icon.classList.add('social-media-icons-yellow');
        const childrenA = icon.children;
        Array.from(childrenA).forEach(child => {
            const grandchildren = child.children;
            Array.from(grandchildren).forEach(grandchild => {
                const grandgrandchildren = grandchild.children;
                Array.from(grandgrandchildren).forEach(grandgrandchild => {
                    grandgrandchild.classList.add('icons');
                });
            });
        });
    } )
    icon.addEventListener('mouseout', ()=>{
        icon.classList.remove('social-media-icons-yellow');
        const childrenA = icon.children;
        Array.from(childrenA).forEach(child => {
            const grandchildren = child.children;
            Array.from(grandchildren).forEach(grandchild => {
                const grandgrandchildren = grandchild.children;
                Array.from(grandgrandchildren).forEach(grandgrandchild => {
                    grandgrandchild.classList.remove('icons');
                });
            });
        });
    });
})