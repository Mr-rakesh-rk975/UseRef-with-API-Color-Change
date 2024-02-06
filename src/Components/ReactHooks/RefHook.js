import React, { useEffect, useState, useRef } from 'react';


function RefHook() {

   const [users, setUsers] = useState([]);
    const [color, setColor] = useState('');

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const inputRef = useRef(null);
    const  userRef = useRef(null)

   

// const focusInputAndChangeColor = () => {
//     const inputElement = inputRef.current;
//     inputElement.focus();   
//     const userElement = userRef.current;

//     const updateStyles = () => {
//         if (!inputElement.value) {
//             // If input is empty, revert to default font size and color
//             inputElement.style.backgroundColor = ''; // Empty string removes the style
//             inputElement.style.fontSize = ''; // Empty string removes the style
//             inputElement.style.color = 'black';
            
//             // Remove the event listener after updating styles
//             inputElement.removeEventListener('input', updateStyles);
//         }
//     };

//     // Add an event listener for the input event to revert styles when input value changes
//     inputElement.addEventListener('input', updateStyles);

//     if (color) {
//         // If color is set, change background color, text color, and font size
//         userElement.style.backgroundColor = color;
//         userElement.style.color = 'white';
//         inputElement.style.backgroundColor = color;
//         inputElement.style.color = 'white';
//         inputElement.style.fontSize = '40px';
//     } else {
//         // If color is not set, revert to default font size
//         inputElement.style.fontSize = 'normal';
//     }
// };






// const focusInputAndChangeColor = () => {
//     const inputElement = inputRef.current;
//     inputElement.focus();
//     const userElements = document.querySelectorAll('ul');

//     const updateStyles = () => {
//         const inputValue = inputElement.value.trim();
//         const inputParts = inputValue.split('=');
//         const userId = inputParts[0].trim();
//         const color = inputParts[1] ? inputParts[1].trim() : '';

//         userElements.forEach((userElement) => {
//             const userIdFromList = userElement.querySelector('li:first-child').textContent;
//             if (userId === userIdFromList) {
//                 // If input matches user ID, apply color to the user element
//                 userElement.style.backgroundColor = color;
//                 userElement.style.color = 'white';
//             } else {
//                 // If input doesn't match, revert styles
//                 userElement.style.backgroundColor = '';
//                 userElement.style.color = '';
//             }
//         });
//     };

//     // Add an event listener for the input event to update styles
//     inputElement.addEventListener('input', updateStyles);

//     // Call updateStyles initially to update styles based on initial input value
//     updateStyles();
// };



// const focusInputAndChangeColor = () => {
//     const inputElement = inputRef.current;
//     inputElement.focus();
//     const userElements = document.querySelectorAll('ul');

//     const updateStyles = () => {
//         const inputValue = inputElement.value.trim();
//         const inputParts = inputValue.split('=');
//         const userId = inputParts[0].trim();
//         const color = inputParts[1] ? inputParts[1].trim() : '';

//         userElements.forEach((userElement) => {
//             const userIdFromList = userElement.querySelector('li:first-child').textContent;
//             if (userId === userIdFromList) {
//                 // If input matches user ID, apply color to the user element
//                 userElement.style.backgroundColor = color;
//                 userElement.style.color = 'white';
//             } else {
//                 // If input doesn't match, revert styles
//                 userElement.style.backgroundColor = '';
//                 userElement.style.color = '';
//             }
//         });
//     };

//     // Add an event listener for the input event to update styles immediately
//     inputElement.addEventListener('input', updateStyles);

//     // Call updateStyles initially to update styles based on initial input value
//     updateStyles();
// };


const changeInputColor = (e) => {
    setColor(e.target.value); // Update color state with the input value
    const inputElement = inputRef.current;
    inputElement.focus();
    const userElements = document.querySelectorAll('ul');

    const updateStyles = () => {
        const inputValue = inputElement.value.trim();
        const inputParts = inputValue.split('=');
        const userId = inputParts[0].trim();
        const colors = inputParts[1] ? inputParts[1].split('+').map(color => color.trim()) : [];
    
        // Apply mixed gradient to the user element
        userElements.forEach((userElement) => {
            const userIdFromList = userElement.querySelector('li:first-child').textContent;
            if (userId === userIdFromList) {
                if (colors.length > 1) {
                    // Create gradient background if more than one color is provided
                    const gradient = colors.map((color, index) => `${color} ${(index / (colors.length - 1)) * 100}%`).join(', ');
                    userElement.style.background = `linear-gradient(to right, ${gradient})`;
                    userElement.style.color = 'white';
                } else if (colors.length === 1) {
                    // Apply single color if only one color is provided
                    userElement.style.background = colors[0];
                    userElement.style.color = 'white';
                } else {
                    // Remove background if no color is provided
                    userElement.style.background = '';
                    userElement.style.color = '';
                }
            } else {
                userElement.style.background = '';
                userElement.style.color = '';
            }
        });
    };
    
    // Add an event listener for the input event to update styles immediately
    inputElement.addEventListener('input', updateStyles);

    // Call updateStyles initially to update styles based on initial input value
    updateStyles();
};




    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <div className='usedata-outer'>
            {users.map((user, index) => (
                <ul key={index} ref={userRef} className='usedata-inner'> 
                    <li>{user.id}</li>
                    <li>{user.username}</li>
                </ul>
            ))}
            </div>
            {/* Assign the ref to the input element */}
            <input ref={inputRef} value={color} type="text" onChange={changeInputColor} />
            {/* Button to trigger focusing the input and changing background color */}
            {/* <button onClick={focusInputAndChangeColor}>Focus Input and Change Color</button> */}
        </div>
  )
}

export default RefHook;
