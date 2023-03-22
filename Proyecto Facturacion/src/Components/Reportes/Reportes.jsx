import BarraLateral from '../common/index.js';
import {
    Col,
    Button,
    Row,
    Container,
    Card,
    Form,
    FormControl,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
    PencilFill,
    BookmarkCheckFill,
    ArrowRightCircle,
    ArrowLeftCircle,
} from 'react-bootstrap-icons';

import { useState, useEffect, useMemo, useRef } from 'react';

import Modal from 'react-bootstrap/Modal';
import DataTable from 'react-data-table-component';

import {
    showbillconfirmslice,
    closebillconfirmslice,
} from '../../features/billconfirmslice';

import { updatepedidoseleccionados } from '../../features/pedidoseleccionados';

function REPORTES() {
    return (
        <div>
            <BarraLateral />
            <h1>Reportes</h1>
        </div>
    );
}

export default REPORTES;
