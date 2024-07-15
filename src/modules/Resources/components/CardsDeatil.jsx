import React from "react";
import Card from "./Card";
import img from "../../../assets/images/MigratingfromECStoEKS-2-.avif";
const cardsData = [
  {
    title: "Migration from  EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    title: "Migration from  EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    title: "Migration from  EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    title: "Migration from  EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    title: "Migration from  EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    title: "Migration from  EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
  {
    title: "Migration from  EC2 to EKS",
    imageUrl: img,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit rerum error repellendus nemo obcaecati aliquam omnis, dolorum accusantium officiis ab qui ratione nesciunt natus? Officiis itaque aliquid quae accusantium?",
    buttonText: "Read More",
    buttonUrl: "#",
  },
];

const CardsDetail = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-10  gap-10 md:px-28  justify-center pt-12 pb-12">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
          buttonText={card.buttonText}
          buttonUrl={card.buttonUrl}
        />
      ))}
    </div>
  );
};

export default CardsDetail;
