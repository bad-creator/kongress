import React from "react";
import Image from "next/image";

const UserCard = ({ image, name, role, description }) => {
  return (
    <div className="flex flex-col items-center  max-w-[200px]">
      {/* Аватар пользователя */}
      <Image
        width={"153"}
        height={"153"}
        src={image}
        alt={`${name}'s avatar`}
        className="w-36 h-36 lg:w-52 lg:h-52 rounded-full object-cover"
      />

      {/* Имя пользователя */}
      <h2 className="text-xl font-bold text-white text-center mt-2">{name}</h2>

      {/* Роль в компании */}
      <p className=" text-text-secondary text-center">{role}</p>

      {/* Разделительная линия */}
      <hr className="w-full border-text-primary my-2" />

      {/* Описание */}
      <p className="text-text-primary text-center">{description}</p>
    </div>
  );
};

export default UserCard;
