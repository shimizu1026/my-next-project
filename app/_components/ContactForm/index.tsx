import styles from "./index.module.css";

export default function ContactForm() {
	return (
		<form className={styles.form}>
			<div className={styles.horizontal}>
				<div className={styles.item}>
					<label className={styles.label} htmlFor="lastname">
						姓
					</label>
					<input type="text" className={styles.textfield} id="lastname" name="lastname" />
				</div>
				<div className={styles.item}>
					<label className={styles.label} htmlFor="firstname">
						名
					</label>
					<input type="text" className={styles.textfield} id="firstname" name="firstname" />
				</div>
				<div className={styles.item}>
					<label className={styles.label} htmlFor="company">
						会社名
					</label>
					<input type="text" className={styles.textfield} id="company" name="company" />
				</div>
				<div className={styles.item}>
					<label className={styles.label} htmlFor="email">
						メールアドレス
					</label>
					<input type="text" className={styles.textfield} id="email" name="email" />
				</div>
				<div className={styles.item}>
					<label className={styles.label} htmlFor="message">
						メッセージ
					</label>
					<input type="text" className={styles.textfield} id="message" name="message" />
				</div>
				<div className={styles.actions}>
					<input type="text" value="送信する" className={styles.button} />
				</div>
			</div>
		</form>
	);
}