import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {


    return (
        <>
            <Modal

                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };
    function findErrors() {
        const newErrors = {};


        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {

        }
    }

    return (

                </Form>
            </div>
        </div>
    );
}

