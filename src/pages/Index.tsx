import { Container } from "@/components/layout/Container";
import { FeaturesGrid } from "@/components/features/FeaturesGrid";

const Index = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Communication Tools
          </h1>
          <p className="text-xl text-gray-600">
            Advanced AI-powered solutions for seamless communication
          </p>
        </div>
        <FeaturesGrid />
      </Container>
    </main>
  );
};

export default Index;