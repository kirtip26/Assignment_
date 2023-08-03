async function fetchDataFromGoogle() {
    try {
      const fetch = await import('node-fetch');
  
      const response = await fetch.default('https://www.youtube.com');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchDataFromGoogle();
  