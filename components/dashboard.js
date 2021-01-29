import Link from "./link";

export default function Dashboard() {
  return (
    <div className="max-w-lg px-4 mx-auto my-10">
      <h1 className="block mb-20 text-center heading-1">React Projects</h1>
      <Link url="/meme-generator" className="btn">
        Meme Generator
      </Link>
      <Link url="/time" className="btn">
        Time (w/Flask)
      </Link>
      <Link url="/tasks" className="btn">
        Tasks
      </Link>
    </div>
  );
}
