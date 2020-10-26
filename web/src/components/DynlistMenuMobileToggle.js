import React, { useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import classNames from 'classnames';

function MyCustomToggle({ eventKey, label }) {
  const currentEventKey = useContext(AccordionContext); // <-- Will update every time the eventKey changes.
  const toggleOnClick = useAccordionToggle(eventKey);
  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <div
      role="button"
      onKeyPress={toggleOnClick}
      tabIndex="0"
      className={classNames('mobile-menu__link', 'mobile-menu__link--expandable', {
        open: isCurrentEventKey,
      })}
      onClick={toggleOnClick}
    >
      {label}
    </div>
  );
}

export default MyCustomToggle;
