import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      image: 'https://t4.ftcdn.net/jpg/04/36/23/41/360_F_436234154_GyTM8dZBFljIAL6p8tkdEfFc96J7KOKR.jpg',
      title: 'Crop Consultation',
      description: 'Our experienced agronomists provide personalized crop consultation to maximize yields and ensure healthy harvests.',
    },
    {
      image: 'https://embuni.ac.ke/wp-content/uploads/2020/03/2020FarmersTraining6.jpg',
      title: 'Precision Farming',
      description: 'We offer advanced precision farming techniques to optimize resource utilization and increase efficiency.',
    },
    {
      image: 'https://media.sciencephoto.com/e7/78/00/32/e7780032-800px-wm.jpg',
      title: 'Soil Analysis',
      description: 'Our experts perform in-depth soil analysis to recommend the right fertilizers and nutrients for your crops.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZhxlP4saQt6pYafgH6Hs3SWIhYStx2luxQ&usqp=CAU',
      title: 'Sustainable Practices',
      description: 'We promote sustainable agricultural practices that minimize environmental impact and promote long-term viability.',
    },
  ];

  const styles = {
    servicesSection: {
      marginTop: '50px',
      textAlign: 'center',
    },
    serviceContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '30px',
    },
    serviceImage: {
      width: '200px',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '50%',
      marginRight: '20px',
    },
    serviceDetails: {
      flex: 1,
      textAlign: 'left',
    },
    serviceTitle: {
      color: '#000',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    serviceDescription: {
      color: '#666',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '18px',
      lineHeight: '1.5',
    },
  };

  return (
    <div className="services-section" style={styles.servicesSection}>
      <h2 className="services-section-title" style={styles.serviceTitle}>
        Our Services
      </h2>
      {services.map((service, index) => (
        <div key={index} style={styles.serviceContainer}>
          <img src={service.image} alt={service.title} style={styles.serviceImage} />
          <div style={styles.serviceDetails}>
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            <p style={styles.serviceDescription}>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
