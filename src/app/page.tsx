'use client'

import { Zap } from "lucide-react";
import { Footer } from "./components/footer";
import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import { Modal, ModalButton } from "../components/open-modal";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <button
        onClick={() => setOpen(true)}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Abrir Modal
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Sistema"
        description="Confirmación de acción"
        size="md"
        footer={
          <>
            <ModalButton
              variant="default"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </ModalButton>

            <ModalButton
              variant="primary"
              onClick={() => {
                console.log("Confirmado")
                setOpen(false)
              }}
            >
              Confirmar
            </ModalButton>
          </>
        }
      >
        <p className="text-sm text-foreground/70">
          ¿Deseas continuar con esta operación?
        </p>
      </Modal>
    </>
  );
}
