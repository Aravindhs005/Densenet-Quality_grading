import React from 'react';
import './styles/descpage.css';

const Descpage = () => {
  return (
    <div className="about-page">
      <h1>About Fresh.Sight.AI</h1>
      <p>
        Agricultural produce quality, particularly fruits and vegetables, plays a crucial role in ensuring consumer satisfaction and minimizing waste across the supply chain. However, traditional methods of quality assessment, which rely on manual inspection, are time-consuming, labor-intensive, and often prone to human error.
      </p>
      <p>
        These conventional approaches may miss subtle quality indicators such as minor texture changes or slight color variations, leading to inaccurate classification and inconsistencies in produce grading.
      </p>
      <p>
        Machine learning, a branch of artificial intelligence, offers a promising solution for automating and improving the accuracy of produce quality assessment. By analyzing complex datasets, including images of produce with various quality levels, machine learning algorithms can detect patterns that traditional methods might overlook. Deep learning techniques, such as Convolutional Neural Networks (CNNs), excel in processing and analyzing image data, making them well-suited for the classification of fruits and vegetables.
      </p>
      <p>
        Pre-trained CNN architectures like DenseNet121 and MobileNetV2, combined with traditional machine learning models such as Support Vector Machines (SVM) and Random Forest, provide a robust system for identifying quality-related features.
      </p>
      <p>
        Incorporating these machine learning algorithms into agricultural practices can significantly improve the precision and scalability of quality assessment systems. By leveraging features such as color, texture, and shape, the models can classify produce into categories like unripe, ripe, old, and damaged. These models are also adaptable to a variety of produce types through fine-tuning. Hybrid models, which combine deep learning and traditional techniques, enhance performance by overcoming the limitations of individual approaches.
      </p>
      <p>
        Metrics such as confusion matrices, precision, recall, and accuracy are used to evaluate these models. While machine learning shows great potential for agricultural produce quality analysis, challenges such as overfitting and the need for diverse datasets remain critical hurdles.
      </p>
    </div>
  );
};

export default Descpage;
