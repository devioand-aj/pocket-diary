import React, { forwardRef } from 'react';
import { FaUser } from 'react-icons/fa';
import { FcCellPhone } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { TiBusinessCard } from 'react-icons/ti';
import { BsTrash } from 'react-icons/bs';
import { GrEdit } from 'react-icons/gr';

// import Spinner from "./common/Spinner";
// import useParsedDate from "../hooks/useParsedDate";
// import useIsLatestItem from "../hooks/useIsLatestItem";
import '../styles/contactCard.css';

const ContactCard = forwardRef(
  ({ _id, name, phone, email, type, date, onDelete, onEdit }, ref) => {
    // const { loading, parsedDate } = useParsedDate(date, true);
    // const isLatest = useIsLatestItem(date, 60 * 1000, true);

    // function renderDatePaperStyles(date) {
    //   if (date.toLowerCase() === "today")
    //     return "card-user-date card-user-date-danger text-capitalize";

    //   return "card-user-date card-user-date-dark text-capitalize";
    // }

    const contact = { contact_id: _id, name, phone, email, type, date };

    return (
      <div className='contact-card' ref={ref}>
        <div className='card-header'>
          <div className='card-holder-detail'>
            <div className='body-icon'>
              <FaUser />
            </div>
            <h4>{name}</h4>
            {false && <div className='paper paper-small paper-danger'>New</div>}
          </div>
          <div className='card-action-buttons'>
            <GrEdit onClick={() => onEdit(contact)} />
            <BsTrash onClick={() => onDelete(_id)} />
          </div>
        </div>
        <div className='card-phone'>
          <div className='body-icon icon-mobile'>
            <FcCellPhone />
          </div>
          <div>{phone}</div>
        </div>
        <div className='card-email'>
          <div className='body-icon'>
            <MdEmail />
          </div>
          <div>{email}</div>
        </div>
        <div className='card-type'>
          <div className='body-icon'>
            <TiBusinessCard />
          </div>
          <div className='paper paper-light text-capitalize'>{type}</div>
        </div>
        {/* <div className={renderDatePaperStyles(parsedDate)}>
          {loading ? <Spinner name="spinner-light-extra-small" /> : parsedDate}
        </div> */}
      </div>
    );
  }
);

export default ContactCard;
