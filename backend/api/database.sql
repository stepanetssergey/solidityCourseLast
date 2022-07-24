use backend;

CREATE TABLE IF NOT EXISTS sessions (
    id_session INT AUTO_INCREMENT PRIMARY KEY,
    useAddress VARCHAR(100),
    nonceTimestamp INT,    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=INNODB;
