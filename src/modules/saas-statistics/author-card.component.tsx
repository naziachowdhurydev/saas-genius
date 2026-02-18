import { Container } from "@/components/shared/container.component";

export const AuthorCard = () => {
  return (
    <section className="my-8">
      <Container>
        <div className="space-y-7">
          <h3 className="text-4xl font-bold">Author</h3>
          <div className="flex items-center gap-4 border w-[800px] p-6 rounded-2xl border-gray-300">
            <div className="w-[500px]">
              <h5 className="text-2xl font-bold">Adaline Lefe Mary John</h5>
              <p className="text-xl text-gray-600 leading-relaxed">
                A great researcher and creator, Adaline is responsible for
                planning and managing content for all our websites. She has over
                10 years of experience in creating and managing content.
              </p>
              <p className="text-lg text-gray-600">
                Show all posts from{" "}
                <span className="text-black text-bold border-b border-dashed">
                  Adaline Lefe Mary John
                </span>
              </p>
            </div>
            <div className="rounded-full w-[200px] h-[200px]">
              <img
                className="rounded-full w-full h-full object-cover"
                src="https://www.saasgenius.com/wp-content/uploads/2023/03/Adaline-300x300.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

AuthorCard.displayName = "AuthorCard";
