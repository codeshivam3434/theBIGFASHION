-- Insert admin user (password: Admin@123)
INSERT INTO users (email, password_hash, name, role, created_at, updated_at)
VALUES 
  ('admin@bigapparels.com', '$2a$10$GmOzABiGLdnrXhGwlFn.8.XZX5QVnQbqVdUw8XNsJQWZYMkE4xnHa', 'Admin User', 'admin', NOW(), NOW());

-- Insert regular users (password: User@123)
INSERT INTO users (email, password_hash, name, role, created_at, updated_at)
VALUES 
  ('john.doe@example.com', '$2a$10$GQduVfPPzLBMmCrNqVEYVOIHFbZfWLd5nh/GkwYP4OCDSGbQwGIES', 'John Doe', 'user', NOW() - INTERVAL '5 days', NOW() - INTERVAL '5 days'),
  ('jane.smith@example.com', '$2a$10$GQduVfPPzLBMmCrNqVEYVOIHFbZfWLd5nh/GkwYP4OCDSGbQwGIES', 'Jane Smith', 'user', NOW() - INTERVAL '3 days', NOW() - INTERVAL '3 days'),
  ('michael.brown@example.com', '$2a$10$GQduVfPPzLBMmCrNqVEYVOIHFbZfWLd5nh/GkwYP4OCDSGbQwGIES', 'Michael Brown', 'user', NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days'),
  ('sarah.wilson@example.com', '$2a$10$GQduVfPPzLBMmCrNqVEYVOIHFbZfWLd5nh/GkwYP4OCDSGbQwGIES', 'Sarah Wilson', 'user', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day');
