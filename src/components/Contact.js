export default function Contact() {
  return (
    <section id="contact" className="py-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="grid gap-4">
        <input className="border p-2" type="text" placeholder="Name" required />
        <input className="border p-2" type="email" placeholder="Email" required />
        <textarea className="border p-2" rows="5" placeholder="Message" required></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send</button>
      </form>
    </section>
  );
}
