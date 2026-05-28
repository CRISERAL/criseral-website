'use client'
import { Modal } from "@/src/components/open-modal";
import { useState } from "react";

export default function Contact() {
    const [open, setOpen] = useState(false)
    return (
        <section>
            <button onClick={() => setOpen(true)}>
                test
            </button>
            <Modal open={open} onClose={() => setOpen(false)}>
                sd
                <br />
                <br />
                <button >
                    test
                </button>
            </Modal>
        </section>
    )
}