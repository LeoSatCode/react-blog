import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://wabtsmqwvwtycaudgeeo.supabase.co/rest/v1',
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhYnRzbXF3dnd0eWNhdWRnZWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MjgwMTksImV4cCI6MjA1NzIwNDAxOX0.0QxDtiZxdjmY2kIGI_a1n8ydWNDecUBf5-PO0scS1-o", // Chave pública
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhYnRzbXF3dnd0eWNhdWRnZWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MjgwMTksImV4cCI6MjA1NzIwNDAxOX0.0QxDtiZxdjmY2kIGI_a1n8ydWNDecUBf5-PO0scS1-o"
  }
});
