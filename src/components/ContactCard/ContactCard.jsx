import styles from "./ContactCard.module.css";

const ContactCard = ({
  title,
  addressLine1,
  addressLine2,
  addressLine3,
  phone,
  email,
}) => {
  return (
    <div className={styles.contactCard}>
      <h3>{title}</h3>
      <div>
        <p>{addressLine1}</p>
        <p>{addressLine2}</p>
        <p>{addressLine3}</p>
      </div>
      <hr />
      <div>
        <p>
          Phone <span>{phone}</span>
        </p>
        <p>
          Email <span>{email}</span>
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
