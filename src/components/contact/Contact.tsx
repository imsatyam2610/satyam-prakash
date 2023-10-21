export default function Contact() {
  return (
    <>
      <div className="text-center mx-auto container">
        <h2>Contact</h2>
        <p>Feel free to reach out to me for any questions or opportunities!</p>
        <form className="flex flex-col gap-3 max-w-xl w-[95%] mx-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 border rounded-md p-2"
            required
          />
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 border rounded-md p-2"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            required
            className="flex-1 border rounded-md p-2"
          />
          <textarea
            placeholder="Your Message"
            className="flex-1 border rounded-md p-2"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
