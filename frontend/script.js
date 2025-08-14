// Updated to use backend API 

async function loadMenuFromAPI() { 

    try { 

        const response = await fetch('http://localhost:3000/api/menu'); 

        const result = await response.json(); 

         

        if (result.success) { 

            displayMenu(result.data); 

        } 

    } catch (error) { 

        console.error('Error loading menu:', error); 

        // Fallback to sample data 

        displayMenu(sampleMenuItems); 

    } 

} 

  

// Rest of the code... 

