import React, { useState } from 'react';
import AdminHeader from './admin_header';
import '../styles/add_new_course.css';

function AddCoursePage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    duration: '',
    level: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform submission logic here
  };

  return (
    <div className="add-course-page-wrapper">
      <AdminHeader />
      <div className="add-course-page">
        <h2>Add New Course/Topic</h2>
        <form className="add-course-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter course/topic title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter course/topic description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Enter category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration (hours)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              placeholder="Enter duration in hours"
              value={formData.duration}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="level">Level</label>
            <input
              type="text"
              id="level"
              name="level"
              placeholder="Enter course level"
              value={formData.level}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-button">Add Course</button>
        </form>
      </div>
    </div>
  );
}

export default AddCoursePage;
