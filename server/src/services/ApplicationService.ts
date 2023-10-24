import {db} from "../app";
import {Request, Response} from 'express';

class ApplicationService {
    async fetchApps(req: Request, res: Response) {
        const { page, pageSize } = req.query;

        // Set default values if query parameters are not provided
        const currentPage = parseInt(page as string, 10) || 1;
        const itemsPerPage = parseInt(pageSize as string, 10) || 10;

        // Calculate the offset based on the current page and page size
        const offset = (currentPage - 1) * itemsPerPage;

        // Use the calculated offset and itemsPerPage in the SQL query
        const sql = 'SELECT * FROM applications LIMIT ? OFFSET ?';

        db.get('SELECT COUNT(*) as totalCount FROM applications', (countErr, row) => {
            if (countErr) {
                console.error('Error counting application records:', countErr);
                res.status(500).json({ error: 'Server error' });
            } else {
                const totalCount = row['totalCount'] || 0;
                const totalPages = Math.ceil(totalCount / itemsPerPage);

                // Use the calculated offset and itemsPerPage in the SQL query
                const sql = 'SELECT * FROM applications order by id desc LIMIT ? OFFSET ?';

                db.all(sql, [itemsPerPage, offset], (err, rows) => {
                    if (err) {
                        console.error('Error fetching applications:', err);
                        res.status(500).json({ error: 'Server error' });
                    } else {
                        res.json({ list: rows, totalPages });
                    }
                });
            }
        });
    }

    async createApp(req: Request, res: Response) {
        const {fio, phoneNumber, requestType, date = '', quantity = 0, city = '', call = false} = req.body;

        if (!fio || !phoneNumber || !requestType) {
            return res.status(400).json({error: 'All fields are required'});
        }

        db.run('INSERT INTO applications (fio, phoneNumber, requestType, date, quantity, city, call) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [fio, phoneNumber, requestType, date, quantity, city, call], function (err) {
                if (err) {
                    console.error('Error creating application:', err);
                    res.status(500).json({error: 'Server error'});
                } else {
                    res.status(201).json({id: this.lastID, fio, phoneNumber, requestType, date, quantity, city, call});
                }
            });
    }

    async deleteApp(req: Request, res: Response) {
        const { id } = req.params;

        // Check if the ID is valid (you can add more validation as needed)
        if (!id) {
            return res.status(400).json({ error: 'Invalid ID' });
        }

        // Perform the delete operation in the database
        db.run('DELETE FROM applications WHERE id = ?', [id], (err) => {
            if (err) {
                console.error('Error deleting application record:', err);
                res.status(500).json({ error: 'Server error' });
            } else {
                res.json({ message: 'Record deleted successfully' });
            }
        });
    }
}


export default new ApplicationService()
