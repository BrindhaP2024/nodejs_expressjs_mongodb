const corsOptions = {
    origin: "http://google.com", 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  