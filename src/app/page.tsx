import ForgePage from "@/components/after-video";
import SceneWrapper from "@/components/scene-wrapper";
import YouTubeEmbed from "@/components/video-player";

export default function Home() {
  return (
    <main className="w-full mt-15 h-screen bg-black">
      <SceneWrapper />
      <YouTubeEmbed videoId="E1czmX6bjFA" />
      <ForgePage />
    </main>
  );
}
