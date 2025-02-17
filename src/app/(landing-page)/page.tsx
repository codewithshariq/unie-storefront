import Header from "./components/header";
import styels from "./page.module.css";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col min-h-screen w-screen",
        styels.container
      )}
    >
      <Header />
    </div>
  );
}
