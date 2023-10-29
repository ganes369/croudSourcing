"use client";

import React from "react";
import handsImage from "@/assets/Semtítulo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/Button";
import { FormatadorDeHoras } from "@/utils/dateUtils";

export default function Details() {
  const comments = [
    {
      img: handsImage.src,
      name: "Nome Sobrenome",
      date: new Date().setHours(new Date().getHours() - 1),
      comment:
        "Et inventore rerum ab reprehenderit autem ut omnis pariatur! 33 rerum quia sit neque dolorum et neque repellat qui sapiente eius!",
    },
    {
      img: handsImage.src,
      name: "Nome Sobrenome",
      date: new Date().setHours(new Date().getHours() - 1),
      comment:
        "Et inventore rerum ab reprehenderit autem ut omnis pariatur! 33 rerum quia sit neque dolorum et neque repellat qui sapiente eius!",
    },
    {
      img: handsImage.src,
      name: "Nome Sobrenome",
      date: new Date().setHours(new Date().getHours() - 1),
      comment:
        "Et inventore rerum ab reprehenderit autem ut omnis pariatur! 33 rerum quia sit neque dolorum et neque repellat qui sapiente eius!",
    },
    {
      img: handsImage.src,
      name: "Nome Sobrenome",
      date: new Date().setHours(new Date().getHours() - 1),
      comment:
        "Et inventore rerum ab reprehenderit autem ut omnis pariatur! 33 rerum quia sit neque dolorum et neque repellat qui sapiente eius!",
    },
  ];
  const details = {
    title: "Título do problema",
    address: {
      uf: "CE",
      city: "Barro",
      neighborhood: "Trajano",
    },
    img: handsImage.src,
    description:
      "Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui labore fugit et quia quos id dicta adipisci. Sed perspiciatis amet qui doloribus voluptatem in eaque unde quo minima iste in odit quaerat id aliquam vitae eos reprehenderit aliquid. Et ipsum odio eos possimus saepe ex eligendi rerum ea dignissimos dicta sed atque suscipit aut architecto sequi.",
  };

  const solucao = [
    {
      title: "Título solução",
      value: "1.000",
      votos: 9,
      ok: true,
      description:
        "Et fugiat laudantium et voluptates eius ea omnis fuga. Ea reiciendis expedita sit ducimus dolore hic ducimus galisum aut assumenda veritatis nam tempore iure est provident soluta ad repellat porro. Aut harum sequi cum consequatur dignissimos aut Quis quis aut minus recusandae aut ratione natus quo ipsam nesciunt. A quos minima et ipsam consequatur ut sint omnis ut eius praesentium non veritatis libero et possimus unde non quia animi.",
    },
    {
      title: "Título solução",
      value: "1.000",
      votos: 9,
      description:
        "Et fugiat laudantium et voluptates eius ea omnis fuga. Ea reiciendis expedita sit ducimus dolore hic ducimus galisum aut assumenda veritatis nam tempore iure est provident soluta ad repellat porro. Aut harum sequi cum consequatur dignissimos aut Quis quis aut minus recusandae aut ratione natus quo ipsam nesciunt. A quos minima et ipsam consequatur ut sint omnis ut eius praesentium non veritatis libero et possimus unde non quia animi.",
    },
  ];
  return (
    <main className="flex flex-col items-center">
      <div className="mt-[56px]">
        <h1 className="text-[56px] text-black font-extrabold text-center">
          {details.title}
        </h1>
      </div>
      <div className="flex gap-4 overflow-hidden w-full min-w-[320px] justify-center">
        <div>
          <img
            src={details.img}
            className="w-full max-w-[860px] max-h-[484px]"
          />
          <div>
            <p className="flex items-center">
              <Icon icon="mdi:location" width="14px" height="14px" />
              {details.address.neighborhood}, {details.address.city} -{" "}
              {details.address.uf}
            </p>
            <p className="w-full max-w-[860px] text-base">
              {details.description}
            </p>
          </div>
          <div className="max-w-[860px] bg-pink-clolor rounded-md px-4 py-5 mt-3 mb-3">
            <p className="text-base font-bold">Adicione o título...</p>
            <div className="flex items-center border-2">
              <textarea
                className="w-full outline-none rounded-none bg-transparent outline-3 p-1"
                placeholder="Descreva a sua solução..."
              ></textarea>
            </div>
          </div>
          <div className="max-w-[860px]">
            {solucao.map((elem, index) => (
              <div
                key={index}
                className="shadow-md gap-4 rounded-[10px] px-4 py-5 mt-3 mb-3"
              >
                <p className="font-extrabold">{elem.title}</p>
                <p>{elem.description}</p>
                <div className="flex items-end mt-7 justify-between">
                  <p className="font-extrabold">
                    R$ {elem.value}{" "}
                    <small className="font-normal">
                      {" "}
                      Quantia necessária para esta solução
                    </small>
                  </p>
                  <div className="grid grid-cols-2 flex items-center">
                    <p className="flex">{elem.votos} votos</p>
                    {elem.ok ? (
                      <Button iconLeft="bx:star" className="rounded-md">
                        Votado
                      </Button>
                    ) : (
                      <Button
                        iconLeft="bx:star"
                        variant="secondary"
                        className="rounded-md text-black text-xs"
                      >
                        Votar nesta solução
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-center font-extrabold text-2xl">Discussão</h1>
          <small>*Você pode votar até às 23h59 do dia 00/00/0000</small>
          <div className="flex bg-pink-clolor shadow-md gap-4 rounded-[10px] px-4 py-5 mb-3 w-[430px]">
            <img className="rounded-full w-10 h-10" src={handsImage.src}></img>
            <textarea
              placeholder="Adicione um comentário"
              className="w-full outline-none rounded-none bg-transparent outline-3 p-1"
            ></textarea>
          </div>
          {comments.map((elem, index) => (
            <div
              className="flex shadow-md gap-4 rounded-[10px] px-4 py-5 mb-3 w-[430px]"
              key={index}
            >
              <img className="rounded-full w-10 h-10" src={elem.img}></img>
              <div>
                <p className="text-[16px] text-black font-extrabold">
                  {elem.name}{" "}
                  <small className="font-normal">
                    {FormatadorDeHoras.formatarHorasPassadas(
                      new Date().getTime()
                    )}
                  </small>
                </p>
                <p>{elem.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="w-full bg-black text-white text-center max-h-16 p-10">
        <p>Todos os direitos reservados</p>
      </footer>
    </main>
  );
}
