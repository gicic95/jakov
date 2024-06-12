import ProfileWrapper from "@/components/client/ProfileWrapper";
import AuthenticationCheck from "@/components/frequent/client/AuthenticationCheck";
import Footer from "@/components/structure/Footer";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthenticationCheck />
      <ProfileWrapper>{children}</ProfileWrapper>
    </>
  );
}
