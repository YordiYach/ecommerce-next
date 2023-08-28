import styles from "./sign-up.module.scss";
import Link from "next/link";
import { RegisterForm } from "@/components/Auth";
import { JoinLayout } from "@/layouts";

export default function signUpPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signUp}>
          <h3>Crear Cuenta</h3>
          <RegisterForm />
          <div className={styles.actions}>
            <Link href="/join/sign-in">Atras</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
