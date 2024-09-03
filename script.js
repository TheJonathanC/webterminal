document.addEventListener("DOMContentLoaded", function() {
    let outputElement = document.getElementById('output');
    const banner = `<b>                                                                                                      
          ______    _     __                _____                    __                           
         / ____/   (_)   / /  ___          / ___/   __  __   _____  / /_  ___    ____ ___    _____
        / /_      / /   / /  / _ \\         \\__ \\   / / / /  / ___/ / __/ / _ \\  / __  __ \\  / ___/
       / __/     / /   / /  /  __/        ___/ /  / /_/ /  (__  ) / /_  /  __/ / / / / / / (__  ) 
      /_/       /_/   /_/   \\___/        /____/   \\__, /  /____/  \\__/  \\___/ /_/ /_/ /_/ /____/  
                                                 /____/
    </b><br><br><span style="color: #61cab8;">web-terminal (code<span style="color: #7a23c2;">X</span>)</span><br>Type 'help' for a list of available commands.<br><br>`;

    outputElement.innerHTML += banner;
    outputElement.scrollTop = outputElement.scrollHeight; // Scroll to bottom
});


document.getElementById('commandInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        let input = event.target.value.trim();
        processCommand(input);
        event.target.value = ''; // Clear input
    }
});

function processCommand(input) {
    let outputElement = document.getElementById('output');
    outputElement.innerHTML += `$> ${input}<br>`;

    // Add your custom commands here
    switch (input.toLowerCase()) {
        case 'help':
            outputElement.innerHTML += `Available commands:
            help - Display this help message
            clear - Clear the terminal
            ---------------------------------------------------------
            concept -             Concepts of File System
            attributes -          File attributes
            operations -          File operations
            types -               Types of Files and file systems
            system -              File system
            access -              File access methods
            structure -           Directory structure and protection
            implementation -      File system implementation and structure
            allocation -          File system allocation methods
            management -          Free space management<br><br>`;
            break;
        case 'clear':
            outputElement.innerHTML = '';
            break;
        
        case 'concept':
            outputElement.innerHTML += `<b><span style="color: #61cab8;">
____ _ _    ____    ____ ____ _  _ ____ ____ ___  ___ ____ 
|___ | |    |___    |    |  | |\\ | |    |___ |__]  |  [__  
|    | |___ |___    |___ |__| | \\| |___ |___ |     |  ___] 
</span></b>                                                
The fundamental units of any operating system are files. A file is a permanent record of data and information. File offers a simple way for information to be shared. The data included in the files is of no importance to the operating system. Files that the operating system maps to actual hardware.

A file is an unstructured data series. It is also logical informational units produced by procedures. The data kept in the files ought to be enduring. Any arranged data that is kept in secondary storage is called a file. It is a file's physical view.

A file is a software that the user creates. Files stand for data and programs. An executable file or an object code file could be the compiler's output.

The file's creator determines the information or data contained in the file. The file includes a variety of data kinds, including payroll records, dead stock records, source and object programs, text and numerical data, pictures, graphs, sounds, and more.
            <br>`;
            break;
        case 'attributes':
            outputElement.innerHTML += `<b><span style="color: #61cab8;">
____ _ _    ____    ____ ___ ___ ____ _ ___  _  _ ___ ____ ____ 
|___ | |    |___    |__|  |   |  |__/ | |__] |  |  |  |___ [__  
|    | |___ |___    |  |  |   |  |  \\ | |__] |__|  |  |___ ___] 
</span></b>
Every file possesses unique attributes such as its name, type, creation date, etc. We refer to these properties as "File Attributes." 

<span style="color: #61cab8;">Name</span>: The file is referred to by its name. Typically, a name is only a string of characters.
<span style="color: #61cab8;">Identifier</span>: An identifier is a special number assigned to a file. Within the file system, it identifies files. In contrast to file names, it is not readable by us.
<span style="color: #61cab8;">Type</span>: Another property of a file that indicates its type is called type. Examples of file types are archive (.zip), source code (.c,.java), docx, text (.txt), and so on.
<span style="color: #61cab8;">Location</span>: Indicates the file's location on the device (the directory path). A device pointer is contained in this attribute.
<span style="color: #61cab8;">Size</span>: Indicates the file's current size (in KB, Mb, Gb, etc.) as well as potentially the largest size that is permitted.
<span style="color: #61cab8;">Protection</span>: Describes access control (Permissions concerning Who can execute, write, edit, and read the file). It offers protection for private and sensitive data.
<span style="color: #61cab8;">Time, date, and user identification</span>: This data provides details such as the creation date and time of the file, the time it was last modified, who produced and modified it, and so on.
            <br>`;                                                              
            break;
        case 'operations':
            outputElement.innerHTML += `<b><span style="color: #61cab8;">
____ _ _    ____    ____ ___  ____ ____ ____ ___ _ ____ _  _ ____ 
|___ | |    |___    |  | |__] |___ |__/ |__|  |  | |  | |\\ | [__  
|    | |___ |___    |__| |    |___ |  \\ |  |  |  | |__| | \\| ___] 
</span></b>
File operations are the operations that can be performed on a file. The following are the most common file operations:
1.  <span style="color: #61cab8;">Create</span>: This command creates a new file with the given name and properties in the file system.
2.  <span style="color: #61cab8;">Open</span>: Provides reading, writing, or both access to an already-existing file on the file system.
3.  <span style="color: #61cab8;">Read</span>: obtains information for processing or display from a file that has been opened.
4.  <span style="color: #61cab8;">Write</span>: This feature adds or replaces existing content in an opened file by storing data there.
5.  <span style="color: #61cab8;">Close</span>: This action saves modifications, releases resources linked to an opened file, and closes the file appropriately.
6.  <span style="color: #61cab8;">Rename</span>: This method modifies an existing file's name within the file system without altering its contents or properties.
7.  <span style="color: #61cab8;">Move</span>: This command moves a file, maybe spanning discs or directories, from one position to another within the file system.
8.  <span style="color: #61cab8;">Delete</span>: This action erases a file's contents and attributes permanently and removes it from the file system.
9.  <span style="color: #61cab8;">Copy</span>: This creates a new file with the exact same contents and properties as the original.
10. <span style="color: #61cab8;">Modify File Permissions</span>: This allows you to restrict who can read, write, or execute a file by changing its access license.
11. <span style="color: #61cab8;">Modify File Attributes</span>: Modifies a file's metadata, including its owner, group, creation and modification dates, and other details.
12. <span style="color: #61cab8;">Check File Existence</span>: This function checks to see if a file is present in the file system, enabling conditional actions dependent on the file's existence.
            <br>`;
            break;
        case 'types':
            outputElement.innerHTML += `<b><span style="color: #61cab8;">
____ _ _    ____    ___ _   _ ___  ____ ____ 
|___ | |    |___     |   \\_/  |__] |___ [__  
|    | |___ |___     |    |   |    |___ ___] 
</span></b>
1. <span style="color: #61cab8;">Regular</span>: Stores Data in a structured format and can be read by humans. Examples include text files, source code files, etc.
2. <span style="color: #61cab8;">Directory</span>: Contains information used to access other files. Directories are used to organize files and other directories.
3. <span style="color: #61cab8;">Special</span>: Defines a FIFO (first-in, first-out) pipe file or a physical device.
---------------------------------------------------------
> <span style="color: #61cab8;">PDF (Portable Document Format)</span>:       
                This adaptable format allows documents to be shared between platforms.
> <span style="color: #61cab8;">DOCX (Microsoft Word Document)</span>:       
                A popular word processing format.
> <span style="color: #61cab8;">JPG/JPEG (Joint Photographic Experts Group)</span>: 
                Often used for photos that have undergone lossy compression.
> <span style="color: #61cab8;">PNG (Portable Network Graphics)</span>:      
                Images with lossless compression are stored in PNG format.
> <span style="color: #61cab8;">MP3 (MPEG Audio Layer-3)</span>:             
                A popular format for audio files with lossy compression.
> <span style="color: #61cab8;">MP4 (MPEG-4 Part 14)</span>:     
                Widely used format for audio and video files that can hold still photos and subtitles.
> <span style="color: #61cab8;">JSON (JavaScript Object Notation)</span>:    
                Is a simple format for exchanging data.
> <span style="color: #61cab8;">XML (Extensible Markup Language)</span>:     
                Is a language for data storage and transmission.
            <br>`;
            break;
        case 'system':
            outputElement.innerHTML += `<b><span style="color: #61cab8;">
____ _ _    ____    ____ _   _ ____ ___ ____ _  _ 
|___ | |    |___    [__   \\_/  [__   |  |___ |\\/| 
|    | |___ |___    ___]   |   ___]  |  |___ |  | 
</span></b>
1. <span style="color: #61cab8;">FAT (File Allocation Table)</span>:
> Developed by Microsoft, FAT is a simple file system that is compatible with almost all operating systems. It is used in USB drives, memory cards, and floppy disks.
> Advantages: Simple and easy to use, compatible with all operating systems. Good choice for bootable devices or removable media
> Disadvantages: Poor performance with large files, limited security features, and no journaling. Lack encryption.

2. <span style="color: #61cab8;">NTFS (New Technology File System)</span>:
> Developed by Microsoft, NTFS is a modern file system that offers improved performance, security, and reliability. It is used in Windows operating systems.
> Advantages: Improved performance, security, and reliability. Supports large files and partitions. Supports file compression and encryption.
> Disadvantages: Requires more system resources, making it less suitable for low-power devices or older systems.

3. <span style="color: #61cab8;">APFS (Apple File System)</span>:
> Developed by Apple, APFS is a modern file system optimized for macOS, iOS, and other Apple devices. It offers improved performance, security, and reliability.
> Advantages: Improved performance, security, and reliability. Supports snapshots, encryption, and space sharing. Optimized for flash storage.
> Disadvantages: Limited compatibility with non-Apple devices and operating systems. APFS prioritizes safety and reliability over raw speed.

4. <span style="color: #61cab8;">EXT4 (Fourth Extended File System)</span>:
> EXT4 is a popular file system for Linux distributions. It offers improved performance, reliability, and features compared to earlier versions like EXT3.
> Advantages: Improved performance, reliability, and features. Supports large files and partitions. Supports journaling and file permissions.
> Disadvantages: The metadata checksum function of Ext4 may contribute to unexpected behaviour and even data loss in cases of certain data corruption.
            <br>`;
            break;
        case 'access':
            outputElement.innerHTML += `<b><span style="color: #61cab8;">
____ _ _    ____    ____ ____ ____ ____ ____ ____    _  _ ____ ___ _  _ ____ ___  ____ 
|___ | |    |___    |__| |    |    |___ [__  [__     |\\/| |___  |  |__| |  | |  \\ [__  
|    | |___ |___    |  | |___ |___ |___ ___] ___]    |  | |___  |  |  | |__| |__/ ___] 
</span></b>                                                                         
1. <span style="color: #61cab8;">Sequential Access</span>:
Word by word, the OS read the file. A pointer that starts at the file's base address is kept track of. The pointer gives the user the first word in the file and increases its value by one word if they wish to read it. Up until the end of the file, this process is repeated. 

2. <span style="color: #61cab8;">Direct Access</span>:
Despite the operating system having to complete certain intricate procedures, such as figuring out the correct block number, direct access will produce the desired result. 
For database systems, direct access is typically necessary. Most of the time, we require information from the database that has been filtered. In many situations, sequential access may need to be more efficient and faster.

3. <span style="color: #61cab8;">Indexed Access</span>:
An index can be applied to a collection of specific records if a file can be sorted on any of the filed. 
Nonetheless, an individual record can be retrieved using its index. The address of a record in the file is all that the index is.
With index accessing, searching across a big database becomes incredibly fast and simple, but storing the index value in memory requires more space.
            <br>`;
            break;
        case 'structure':
            outputElement.innerHTML += `<b><span style="color: #61cab8;">
___  _ ____ ____ ____ ___ ____ ____ _   _    ____ ___ ____ _  _ ____ ___ _  _ ____ ____ 
|  \\ | |__/ |___ |     |  |  | |__/  \\_/     [__   |  |__/ |  | |     |  |  | |__/ |___ 
|__/ | |  \\ |___ |___  |  |__| |  \\   |      ___]  |  |  \\ |__| |___  |  |__| |  \\ |___ 
</span></b>
A directory is a list of related files that are stored on a disc. A portion or all of the file attributes may be stored in the directory.

A hard disc can be partitioned into multiple partitions of varying sizes to take advantage of distinct file systems on various operating systems. Volumes and micro discs are other names for the partitions.

There must be a directory where all of the partition's files are displayed for every partition. Every file in the directory has a directory entry that contains all of the information about that file.

<b><span style="color: #61cab8;">
____ _ _    ____    ___  ____ ____ ___ ____ ____ ___ _ ____ _  _ 
|___ | |    |___    |__] |__/ |  |  |  |___ |     |  | |  | |\\ | 
|    | |___ |___    |    |  \\ |__|  |  |___ |___  |  | |__| | \\| 
</span></b>
The purpose of the operating system is to prevent unauthorised users from accessing the user's data. Numerous methods can be used to give protection.
Generally speaking, protection involves linking identity-dependent access to all files and directories through an access control list that includes user names and the various forms of access associated with each user. The length of the access list is the primary issue.

<span style="color: #61cab8;">Owner</span>: The person who originated the file is the owner.
<span style="color: #61cab8;">Group</span>: A group is an assortment of individuals who share a file and have comparable demands.
<span style="color: #61cab8;">Universe</span>: All other users in the system belong to the "universe" category.
            <br>`;
            break;
        case 'implementation':
            outputElement.innerHTML += `<b><span style="color: #61cab8;">
____ _ _    ____    ____ _   _ ____ ___ ____ _  _    _ _  _ ___  _    ____ _  _ ____ _  _ ___ ____ ___ _ ____ _  _ 
|___ | |    |___    [__   \\_/  [__   |  |___ |\\/|    | |\\/| |__] |    |___ |\\/| |___ |\\ |  |  |__|  |  | |  | |\\ | 
|    | |___ |___    ___]   |   ___]  |  |___ |  |    | |  | |    |___ |___ |  | |___ | \\|  |  |  |  |  | |__| | \\| 
</span></b><br>                                                                                                                 
                    <span style="color: #61cab8;">Application Programs</span>
                            |
                            |
                     <span style="color: #61cab8;">Logical File System</span>
                            |
                            |
                  <span style="color: #61cab8;">File Organization Module</span>
                            |
                            |
                    <span style="color: #61cab8;">Basic File System</span>
                            |
                            |
                       <span style="color: #61cab8;">I/O Control</span>
                            |
                            |
                         <span style="color: #61cab8;">Devices</span>
<br>Applications are used by users to interact with files at the highest layer, known as <span style="color: #61cab8;">Application Programs</span>. It offers the user interface needed to perform operations on files, including reading, writing, deleting, and creating new ones. Command-line interfaces, file browsers, and text editors are a few examples.

The <span style="color: #61cab8;">Logical File System</span> maintains a file's metadata, which is all the information about a file other than its actual contents. Utilising file control blocks, it also maintains. The owner, size, rights, and location of a file's contents are all listed in the file control block.

<span style="color: #61cab8;">File Organisation Module</span> contains details about files, including their logical and physical blocks as well as their locations. The logical numbers of logical blocks numbered from 0 to N do not match the physical blocks. A free area that keeps track of unallocated blocks is also included.

The <span style="color: #61cab8;">Basic File System</span> gives the device driver broad instructions to read and write physical blocks to and from the disc. It controls the caches and buffers in memory. The contents of a disc block can be stored in a block in the buffer, while frequently used file system metadata is kept in the cache.

<span style="color: #61cab8;">I/O Control level</span> are device drivers that facilitate data flow between the main memory and disc by serving as an interface between devices and the operating system. Block numbers are entered, and low-level hardware-specific instructions are printed.

The layer at the bottom that has the actual hardware components is the <span style="color: #61cab8;">Devices</span> layer. It really handles reading and writing data to and from the actual storage medium. Hard drives, optical discs, and other storage devices fall under this category.
            <br>`;
            break;
        case 'allocation':
            outputElement.innerHTML += `<b><span style="color: #61cab8;">
____ _ _    ____    ____ _    _    ____ ____ ____ ___ _ ____ _  _    _  _ ____ ___ _  _ ____ ___  ____ 
|___ | |    |___    |__| |    |    |  | |    |__|  |  | |  | |\\ |    |\\/| |___  |  |__| |  | |  \\ [__  
|    | |___ |___    |  | |___ |___ |__| |___ |  |  |  | |__| | \\|    |  | |___  |  |  | |__| |__/ ___] 
</span></b>                                                                                                      
How the files are kept in the disc blocks is determined by the allocation methods.
1. <span style="color: #61cab8;">Contiguous Allocation</span>:
Each file in this approach takes up a continuous block group on the disc. For instance, if a file needs n blocks and block b is the beginning position, the blocks that are assigned to the file are b, b+1, b+2,... b+n}1. This implies that we may ascertain the blocks occupied by the file given the starting block address and the file's length (measured in necessary blocks).

2. <span style="color: #61cab8;">Linked Allocation</span>:
Each file in this method is a linked list of disc blocks, which are not need to be consecutive. Disc blocks are able to be dispersed throughout the disc. A pointer to the beginning and ending file blocks are contained in the directory entry. A pointer to the following block the file occupies is contained in each block.

3. <span style="color: #61cab8;">Indexed Allocation</span>:
The pointers to every block occupied by a file are contained in a unique block in this system called the Index block. Every file possesses a unique index block. The disc address of the i<sup>th</sup> file block is contained in the i<sup>th</sup> entry of the index block.
            <br>`;
            break;
        case 'management':
            outputElement.innerHTML += `<b><span style="color: #61cab8;">
____ ____ ____ ____    ____ ___  ____ ____ ____    _  _ ____ _  _ ____ ____ ____ _  _ ____ _  _ ___ 
|___ |__/ |___ |___    [__  |__] |__| |    |___    |\\/| |__| |\\ | |__| | __ |___ |\\/| |___ |\\ |  |  
|    |  \\ |___ |___    ___] |    |  | |___ |___    |  | |  | | \\| |  | |__] |___ |  | |___ | \\|  |  
</span></b>
Managing the available storage space on the hard drive or other secondary storage devices is known as <span style="color: #61cab8;">"free space management"</span>, and it is an essential component of operating systems.

<span style="color: #61cab8;">Linked Allocation</span>: This method uses a linked list of disc blocks to represent each file. Upon creating a file, the operating system searches for sufficient empty space on the disc and joins the file's blocks together to establish a chain. Although this strategy is easy to use, it may result in space waste and fragmentation.

<span style="color: #61cab8;">Contiguous Allocation</span>: This method stores every file as a single, contiguous disc space block. The operating system locates a continuous block of free space and allocates it to the newly formed file. Although this approach minimizes fragmentation, it has an issue with external fragmentation.

<span style="color: #61cab8;">Indexed Allocation</span>: This method stores the addresses of each disc block that comprises a file in a distinct index block. The operating system saves the addresses of all the blocks in a file in an index block that is formed when the file is created. This technique reduces fragmentation and uses less storage space.

<span style="color: #61cab8;">File Allocation Table (FAT)</span>: This method tracks where each file is stored on the disc by having the operating system maintain a file allocation table. The address of the disc blocks that comprise a file is updated in the file allocation table by the operating system upon file creation. The Microsoft Windows operating system makes extensive use of this technique.

<span style="color: #61cab8;">Volume Shadow Copy</span>: Windows uses a feature called volume shadow copy to make backup copies of specific files or entire volumes. The operating system makes a shadow duplicate of a file and saves it somewhere else when a file is changed. This technique is helpful for both data recovery and preventing unintentional file deletions. 
            <br>`;
            break;

        default:
            outputElement.innerHTML += `Command not found: ${input}<br>`;
            break;
    }
    scrollToBottom(outputElement);
}

function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
}