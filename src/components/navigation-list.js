import RouterLink from "next/link";
import React, { useState } from "react";

import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Drawer
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessIcon from "@mui/icons-material/Business";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GavelIcon from "@mui/icons-material/Gavel";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

function ListItemLink(props) {
  const { icon, primary, to } = props;

  return (
    <RouterLink href={to} passHref>
      <ListItem button component="a">
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </RouterLink>
  );
}

const ExpandableListItem = ({ icon, primary, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        </ListItemIcon>
        <ListItemText primary={primary} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  );
};

const NavigationList = () => {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
    >
      <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
      <ExpandableListItem icon={<BusinessIcon />} primary="Companies">
        <ListItemLink
          to="/companies"
          primary="Search Companies"
          icon={<SearchIcon />}
        />
      </ExpandableListItem>
      <ExpandableListItem icon={<PersonIcon />} primary="People">
        <ListItemLink
          to="/people"
          primary="Search People"
          icon={<SearchIcon />}
        />
      </ExpandableListItem>
      <ExpandableListItem icon={<GavelIcon />} primary="Opportunities">
        <ListItemLink
          to="/opportunities"
          primary="Search Opportunities"
          icon={<SearchIcon />}
        />
      </ExpandableListItem>
      <ExpandableListItem icon={<GavelIcon />} primary="Tenders">
        <ListItemLink
          to="/tenders"
          primary="Search Tenders"
          icon={<SearchIcon />}
        />
      </ExpandableListItem>
      <ExpandableListItem icon={<AssignmentIcon />} primary="Tasks">
        <ListItemLink
          to="/tasks"
          primary="Search Tasks"
          icon={<SearchIcon />}
        />
      </ExpandableListItem>
      <ExpandableListItem icon={<BusinessCenterIcon />} primary="Cases">
        <ListItemLink
          to="/cases"
          primary="Search Cases"
          icon={<SearchIcon />}
        />
      </ExpandableListItem>
      <ListItemLink
        to="/calendar"
        primary="Calendar"
        icon={<CalendarTodayIcon />}
      />
    </List>
  );
};

export default NavigationList;
