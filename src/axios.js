import axios from 'axios';

// const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('dentalSoftToken')} `;
// axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcHJvamVjdGRlbnRhbC5ubFwvYmFja2VuZDJcL2FwaVwvdjFcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjM3MTI3NzQyLCJleHAiOjE2MzcxMzEzNDIsIm5iZiI6MTYzNzEyNzc0MiwianRpIjoiZU5uaTdsSkk1YmM1cWtyMSIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9._Pm42URirPqgAGFgKddi4uTSjemAKDW89CyLGmDpi8A';

// Production backend service url
axios.defaults.baseURL = 'https://projectdental.nl/backend2/api/v1';

// Development backend service url
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';
