import React from 'react';
import './styles/modelpage.css';

export const Modelpage = () => {

  return (
    <div className="about-page">
    <h1>DenseNet121</h1>
    <img src="https://www.researchgate.net/publication/332522654/figure/fig3/AS:749240657661954@1555644301332/Framework-of-Densenet-which-contains-3-Dense-blocks-and-each-block-contains-16.ppm" alt="Contact" />
    <p>
    DenseNet121 is a deep convolutional neural network architecture that is part of the DenseNet family, known for its highly efficient and effective design. Introduced by Gao Huang and colleagues in 2017, DenseNet (Dense Convolutional Network) connects each layer directly to every other layer, unlike traditional networks where layers are sequential. This creates a dense connectivity pattern, enabling the network to reuse features learned in earlier layers and mitigate the vanishing gradient problem. DenseNet121 consists of 121 layers and employs bottleneck and transition layers to reduce the number of parameters, making it computationally efficient without sacrificing performance. It is widely used for image classification, segmentation, and object detection tasks due to its ability to achieve state-of-the-art results with fewer parameters than other architectures like ResNet. DenseNet121 is particularly popular in medical imaging, autonomous vehicles, and other applications where precision and computational efficiency are crucial. Its feature reuse and efficient design make it a powerful model for various deep learning tasks.    <p>
    </p>
    <img src="https://imgur.com/wWHWbQt.jpg" alt="Contact" />
    <p>
    DenseNet121, part of the DenseNet (Densely Connected Convolutional Networks) family, contains 121 layers. Its architecture is distinctive due to its dense connectivity pattern, where each layer is directly connected to every subsequent layer, unlike traditional architectures like ResNet where connections are sequential. This allows DenseNet121 to improve information flow between layers and mitigate issues like the vanishing gradient problem. In DenseNet121, the layers are divided into dense blocks, where each layer receives input from all preceding layers and passes its feature maps to all subsequent layers within the same block. This ensures efficient reuse of features, reducing redundancy and improving model performance with fewer parameters. The architecture includes bottleneck layers that reduce the number of input feature maps, making the model more computationally efficient. Transition layers are also used between dense blocks to down-sample feature maps through pooling, controlling the complexity of the model. DenseNet121 begins with a convolutional layer followed by four dense blocks, each separated by a transition layer. At the end, global average pooling and a fully connected layer lead to classification output. This design enables the model to achieve high performance with fewer parameters, making it highly efficient for tasks like image classification and segmentation.
    </p>
    <img src="https://imgur.com/oiTdqJL.jpg" alt="Contact" />
    </p>
   
    <a href="https://www.geeksforgeeks.org/k-nearest-neighbours/" target="_blank" rel="noopener noreferrer">Click here to know about KNN</a>
    <br/>
    <a href="https://www.geeksforgeeks.org/support-vector-machine-algorithm/" target="_blank" rel="noopener noreferrer">Click here to know about SVM</a>
    <br/>
    <a href="https://www.ibm.com/topics/random-forest#:~:text=Random%20forest%20is%20a%20commonly,Decision%20trees" target="_blank" rel="noopener noreferrer">Click here to know about RF</a>
    <br/>
    <a href="https://aws.amazon.com/what-is/logistic-regression/#:~:text=Logistic%20regression%20is%20a%20data,outcomes%2C%20like%20yes%20or%20no." target="_blank" rel="noopener noreferrer">Click here to know about LR</a>
    <br/>
    <a href="https://towardsdatascience.com/review-xception-with-depthwise-separable-convolution-better-than-inception-v3-image-dc967dd42568" target="_blank" rel="noopener noreferrer">Click here to know about XceptionV3</a>
    <br/>
    <a href="https://paperswithcode.com/method/mobilenetv2" target="_blank" rel="noopener noreferrer">Click here to know about MobileNetE2</a>

  </div>
  );
};

export default Modelpage;
