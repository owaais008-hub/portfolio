const axios = require('axios');

async function testAPI() {
  try {
    console.log('Testing backend API...');
    
    // Test root endpoint
    const rootResponse = await axios.get('http://localhost:5000/');
    console.log('Root endpoint:', rootResponse.data);
    
    // Test projects endpoint
    const projectsResponse = await axios.get('http://localhost:5000/api/projects');
    console.log('Projects endpoint:', projectsResponse.data);
    
    // Test skills endpoint
    const skillsResponse = await axios.get('http://localhost:5000/api/skills');
    console.log('Skills endpoint:', skillsResponse.data);
    
  } catch (error) {
    console.error('API Test Error:', error.message);
  }
}

testAPI();